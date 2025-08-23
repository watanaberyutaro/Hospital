import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const NEWS_FILE_PATH = path.join(process.cwd(), 'public', 'data', 'news.json');

export async function GET() {
  try {
    const data = await fs.readFile(NEWS_FILE_PATH, 'utf-8');
    const { news } = JSON.parse(data);
    
    const sortedNews = news.sort((a: any, b: any) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    return NextResponse.json({ news: sortedNews });
  } catch (error) {
    console.error('Error reading news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await fs.readFile(NEWS_FILE_PATH, 'utf-8');
    const newsData = JSON.parse(data);
    
    const newItem = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    newsData.news.push(newItem);
    
    await fs.writeFile(NEWS_FILE_PATH, JSON.stringify(newsData, null, 2));
    
    return NextResponse.json({ success: true, data: newItem });
  } catch (error) {
    console.error('Error adding news:', error);
    return NextResponse.json({ error: 'Failed to add news' }, { status: 500 });
  }
}