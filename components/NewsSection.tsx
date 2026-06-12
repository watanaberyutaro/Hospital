'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
}

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      setNews(data.news.slice(0, 5));
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '重要なお知らせ':
        return 'bg-red-100 text-red-800';
      case '診療時間変更':
        return 'bg-yellow-100 text-yellow-800';
      case '休診情報':
        return 'bg-orange-100 text-orange-800';
      case '診療案内':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // HTMLタグを取り除く関数
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">お知らせ</h2>
          <div className="text-center">読み込み中...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">お知らせ</h2>
        
        {news.length === 0 ? (
          <div className="text-center text-gray-500">
            現在お知らせはありません
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {news.map((item) => (
                  <Link key={item.id} href={`/news/${item.id}`} className="block">
                    <div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm text-gray-500">{item.date}</span>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(item.category)}`}>
                              {item.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 hover:text-green-600 transition-colors">{item.title}</h3>
                          <p className="text-gray-600 line-clamp-2">{stripHtml(item.content)}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/news" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                すべてのお知らせを見る
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}