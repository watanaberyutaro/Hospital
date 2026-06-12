import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function GET() {
  try {
    const newsData = await storage.getNews();
    
    const sortedNews = newsData.news.sort((a: any, b: any) => 
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
    const newsData = await storage.getNews();
    
    const newItem = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    newsData.news.push(newItem);
    
    await storage.saveNews(newsData);
    
    return NextResponse.json({ success: true, data: newItem });
  } catch (error) {
    console.error('Error adding news:', error);
    const envInfo = storage.getEnvironmentInfo();
    
    // Vercel環境でBlobトークンが設定されていない場合のエラーメッセージ
    if (envInfo.isVercel && !envInfo.hasBlobToken) {
      return NextResponse.json({ 
        error: 'Vercel Blob Storageの設定が必要です。環境変数 BLOB_READ_WRITE_TOKEN を設定してください。',
        info: 'https://vercel.com/docs/storage/vercel-blob を参照してください。'
      }, { status: 503 });
    }
    
    return NextResponse.json({ error: 'Failed to add news' }, { status: 500 });
  }
}