import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const newsData = await storage.getNews();
    
    const index = newsData.news.findIndex((item: any) => item.id === params.id);
    
    if (index === -1) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }
    
    newsData.news[index] = {
      ...newsData.news[index],
      ...body,
      updatedAt: new Date().toISOString()
    };
    
    await storage.saveNews(newsData);
    
    return NextResponse.json({ success: true, data: newsData.news[index] });
  } catch (error) {
    console.error('Error updating news:', error);
    const envInfo = storage.getEnvironmentInfo();
    
    if (envInfo.isVercel && !envInfo.hasBlobToken) {
      return NextResponse.json({ 
        error: 'Vercel Blob Storageの設定が必要です。',
        info: 'https://vercel.com/docs/storage/vercel-blob'
      }, { status: 503 });
    }
    
    return NextResponse.json({ error: 'Failed to update news' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const newsData = await storage.getNews();
    
    const index = newsData.news.findIndex((item: any) => item.id === params.id);
    
    if (index === -1) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }
    
    newsData.news.splice(index, 1);
    
    await storage.saveNews(newsData);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting news:', error);
    const envInfo = storage.getEnvironmentInfo();
    
    if (envInfo.isVercel && !envInfo.hasBlobToken) {
      return NextResponse.json({ 
        error: 'Vercel Blob Storageの設定が必要です。',
        info: 'https://vercel.com/docs/storage/vercel-blob'
      }, { status: 503 });
    }
    
    return NextResponse.json({ error: 'Failed to delete news' }, { status: 500 });
  }
}