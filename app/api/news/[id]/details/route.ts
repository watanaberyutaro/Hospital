import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const NEWS_FILE_PATH = path.join(process.cwd(), 'public', 'data', 'news.json');

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await fs.readFile(NEWS_FILE_PATH, 'utf-8');
    const { news } = JSON.parse(data);
    
    const item = news.find((n: any) => n.id === params.id);
    
    if (!item) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }
    
    return NextResponse.json({ news: item });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}