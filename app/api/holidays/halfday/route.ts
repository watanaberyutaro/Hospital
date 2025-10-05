import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()

    // バリデーション
    if (!Array.isArray(body.weekdays)) {
      return NextResponse.json({
        error: 'Invalid request: weekdays must be an array'
      }, { status: 400 })
    }

    if (typeof body.description !== 'string') {
      return NextResponse.json({
        error: 'Invalid request: description must be a string'
      }, { status: 400 })
    }

    // Read existing data
    let holidays = await storage.getHolidays()

    // デフォルト値を確保
    if (!holidays.regularHolidays) {
      holidays.regularHolidays = { weekdays: [], description: "" }
    }
    if (!holidays.specialHolidays) {
      holidays.specialHolidays = []
    }

    // Update half-day holidays
    holidays.halfDayHolidays = {
      weekdays: body.weekdays,
      description: body.description
    }

    // Save to storage
    await storage.saveHolidays(holidays)

    return NextResponse.json({ success: true, halfDayHolidays: holidays.halfDayHolidays })
  } catch (error) {
    console.error('Error updating half-day holidays:', error)
    console.error('Error details:', error instanceof Error ? error.message : String(error))
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')

    const envInfo = storage.getEnvironmentInfo()
    console.log('Environment info:', envInfo)

    if (envInfo.isVercel && !envInfo.hasBlobToken) {
      return NextResponse.json({
        error: 'Vercel Blob Storageの設定が必要です。環境変数 BLOB_READ_WRITE_TOKEN を設定してください。',
        info: 'https://vercel.com/docs/storage/vercel-blob を参照してください。'
      }, { status: 503 })
    }

    return NextResponse.json({
      error: 'Failed to update half-day holidays',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}