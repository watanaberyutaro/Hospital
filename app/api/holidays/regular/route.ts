import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    
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
    const envInfo = storage.getEnvironmentInfo()
    
    if (envInfo.isVercel && !envInfo.hasBlobToken) {
      return NextResponse.json({ 
        error: 'Vercel Blob Storageの設定が必要です。環境変数 BLOB_READ_WRITE_TOKEN を設定してください。',
        info: 'https://vercel.com/docs/storage/vercel-blob を参照してください。'
      }, { status: 503 })
    }
    
    return NextResponse.json({ error: 'Failed to update regular holidays' }, { status: 500 })
  }
}