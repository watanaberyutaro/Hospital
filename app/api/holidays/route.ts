import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const HOLIDAYS_FILE = path.join(process.cwd(), 'public', 'data', 'holidays.json')

export async function GET() {
  try {
    const data = await fs.readFile(HOLIDAYS_FILE, 'utf-8')
    const holidays = JSON.parse(data)
    return NextResponse.json(holidays)
  } catch (error) {
    console.error('Error reading holidays file:', error)
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
    let holidays
    try {
      const data = await fs.readFile(HOLIDAYS_FILE, 'utf-8')
      holidays = JSON.parse(data)
    } catch {
      holidays = { 
        regularHolidays: { weekdays: [0, 3], description: "毎週水曜日・日曜日" },
        specialHolidays: []
      }
    }
    
    // Add new special holiday
    const newHoliday = {
      id: Date.now().toString(),
      date: body.date,
      reason: body.reason || '臨時休業',
      createdAt: new Date().toISOString()
    }
    
    holidays.specialHolidays.push(newHoliday)
    
    // Save to file
    await fs.writeFile(HOLIDAYS_FILE, JSON.stringify(holidays, null, 2))
    
    return NextResponse.json({ success: true, holiday: newHoliday })
  } catch (error) {
    console.error('Error saving holiday:', error)
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
    const data = await fs.readFile(HOLIDAYS_FILE, 'utf-8')
    const holidays = JSON.parse(data)
    
    // Remove the holiday
    holidays.specialHolidays = holidays.specialHolidays.filter((h: any) => h.id !== id)
    
    // Save to file
    await fs.writeFile(HOLIDAYS_FILE, JSON.stringify(holidays, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting holiday:', error)
    return NextResponse.json({ error: 'Failed to delete holiday' }, { status: 500 })
  }
}