import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const newsData = await storage.getNews();
    
    const item = newsData.news.find((n) => n.id === params.id);
    
    if (!item) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }
    
    // デフォルト値を設定
    const enrichedItem = {
      ...item,
      author: item.author || '管理者',
      viewCount: item.viewCount || 0,
      summary: item.summary || '',
      tags: item.tags || [],
      isPinned: item.isPinned || false,
      isImportant: item.isImportant || false,
      createdAt: item.createdAt || item.date,
      updatedAt: item.updatedAt || item.date
    };
    
    return NextResponse.json({ news: enrichedItem });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}