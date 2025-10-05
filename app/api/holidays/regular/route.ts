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
    if (!holidays.specialHolidays) {
      holidays.specialHolidays = []
    }
    if (!holidays.halfDayHolidays) {
      holidays.halfDayHolidays = { weekdays: [], description: "" }
    }

    // Update regular holidays
    holidays.regularHolidays = {
      weekdays: body.weekdays,
      description: body.description
    }

    // Save to storage
    await storage.saveHolidays(holidays)

    return NextResponse.json({ success: true, regularHolidays: holidays.regularHolidays })
  } catch (error) {
    console.error('Error updating regular holidays:', error)
    console.error('Error details:', error instanceof Error ? error.message : String(error))
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')

    const envInfo = storage.getEnvironmentInfo()
    console.log('Environment info:', envInfo)

    // Vercel Blob Storage設定エラーの場合
    if (error instanceof Error && error.message.includes('Vercel Blob Storage token')) {
      return NextResponse.json({
        error: 'Vercel Blob Storageの設定が必要です',
        details: '環境変数 BLOB_READ_WRITE_TOKEN を設定してください',
        info: 'https://vercel.com/docs/storage/vercel-blob'
      }, { status: 503 })
    }

    // その他のエラー
    return NextResponse.json({
      error: '定休日の更新に失敗しました',
      details: error instanceof Error ? error.message : String(error),
      environmentInfo: envInfo
    }, { status: 500 })
  }
}