import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const NEWS_FILE_PATH = path.join(process.cwd(), 'public', 'data', 'news.json');

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const data = await fs.readFile(NEWS_FILE_PATH, 'utf-8');
    const newsData = JSON.parse(data);
    
    const index = newsData.news.findIndex((item: any) => item.id === params.id);
    
    if (index === -1) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }
    
    newsData.news[index] = {
      ...newsData.news[index],
      ...body,
      updatedAt: new Date().toISOString()
    };
    
    await fs.writeFile(NEWS_FILE_PATH, JSON.stringify(newsData, null, 2));
    
    return NextResponse.json({ success: true, data: newsData.news[index] });
  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json({ error: 'Failed to update news' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await fs.readFile(NEWS_FILE_PATH, 'utf-8');
    const newsData = JSON.parse(data);
    
    const index = newsData.news.findIndex((item: any) => item.id === params.id);
    
    if (index === -1) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }
    
    newsData.news.splice(index, 1);
    
    await fs.writeFile(NEWS_FILE_PATH, JSON.stringify(newsData, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json({ error: 'Failed to delete news' }, { status: 500 });
  }
}