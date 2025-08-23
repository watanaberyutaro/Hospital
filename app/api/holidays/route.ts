import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function GET() {
  try {
    const holidays = await storage.getHolidays()
    
    // デフォルト値を確保
    if (!holidays.regularHolidays) {
      holidays.regularHolidays = { weekdays: [0, 3], description: "毎週水曜日・日曜日" }
    }
    if (!holidays.specialHolidays) {
      holidays.specialHolidays = []
    }
    
    return NextResponse.json(holidays)
  } catch (error) {
    console.error('Error reading holidays:', error)
    return NextResponse.json({ 
      regularHolidays: { weekdays: [0, 3], description: "毎週水曜日・日曜日" },
      specialHolidays: []
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Read existing data
    let holidays = await storage.getHolidays()
    
    // デフォルト値を確保
    if (!holidays.regularHolidays) {
      holidays.regularHolidays = { weekdays: [0, 3], description: "毎週水曜日・日曜日" }
    }
    if (!holidays.specialHolidays) {
      holidays.specialHolidays = []
    }
    
    // Add new special holiday
    const newHoliday = {
      id: Date.now().toString(),
      date: body.date,
      reason: body.reason || '臨時休業',
      createdAt: new Date().toISOString()
    }
    
    holidays.specialHolidays.push(newHoliday)
    
    // Save to storage
    await storage.saveHolidays(holidays)
    
    return NextResponse.json({ success: true, holiday: newHoliday })
  } catch (error) {
    console.error('Error saving holiday:', error)
    const envInfo = storage.getEnvironmentInfo()
    
    if (envInfo.isVercel && !envInfo.hasBlobToken) {
      return NextResponse.json({ 
        error: 'Vercel Blob Storageの設定が必要です。環境変数 BLOB_READ_WRITE_TOKEN を設定してください。',
        info: 'https://vercel.com/docs/storage/vercel-blob を参照してください。'
      }, { status: 503 })
    }
    
    return NextResponse.json({ error: 'Failed to save holiday' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Holiday ID is required' }, { status: 400 })
    }
    
    // Read existing data
    const holidays = await storage.getHolidays()
    
    // Remove the holiday
    holidays.specialHolidays = holidays.specialHolidays.filter((h: any) => h.id !== id)
    
    // Save to storage
    await storage.saveHolidays(holidays)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting holiday:', error)
    const envInfo = storage.getEnvironmentInfo()
    
    if (envInfo.isVercel && !envInfo.hasBlobToken) {
      return NextResponse.json({ 
        error: 'Vercel Blob Storageの設定が必要です。',
        info: 'https://vercel.com/docs/storage/vercel-blob'
      }, { status: 503 })
    }
    
    return NextResponse.json({ error: 'Failed to delete holiday' }, { status: 500 })
  }
}