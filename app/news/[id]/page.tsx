'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag, User, Eye, Clock, Pin, AlertCircle, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  summary: string;
  category: string;
  date: string;
  thumbnail: string;
  tags: string[];
  isPinned: boolean;
  isImportant: boolean;
  author: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (params.id) {
      fetchNewsDetail(params.id as string);
      fetchRelatedNews();
    }
  }, [params.id]);

  const fetchNewsDetail = async (id: string) => {
    try {
      const response = await fetch(`/api/news/${id}/details`);
      if (!response.ok) {
        throw new Error('News not found');
      }
      const data = await response.json();
      setNews(data.news);
      
      // Increment view count
      await fetch(`/api/news/${id}/view`, { method: 'POST' });
    } catch (error) {
      console.error('Error fetching news detail:', error);
      setNews(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedNews = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      setRelatedNews(data.news.slice(0, 3));
    } catch (error) {
      console.error('Error fetching related news:', error);
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
      case 'イベント':
        return 'bg-purple-100 text-purple-800';
      case '健康情報':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news?.title,
        text: news?.summary || news?.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('URLをコピーしました');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
              <div className="h-96 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">お知らせが見つかりません</h1>
            <p className="text-gray-600 mb-8">指定されたお知らせは存在しないか、削除された可能性があります。</p>
            <Link 
              href="/news" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Remove HTML tags for plain text content (for backward compatibility)
  const isHtmlContent = news.content.includes('<') && news.content.includes('>');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            戻る
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {news.isPinned && (
                      <span className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                        <Pin className="w-4 h-4" />
                        固定
                      </span>
                    )}
                    {news.isImportant && (
                      <span className="flex items-center gap-1 text-red-600 text-sm font-medium">
                        <AlertCircle className="w-4 h-4" />
                        重要
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(news.category)}`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {news.category}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    {news.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(news.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {news.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {news.viewCount || 0} 回閲覧
                    </span>
                    {news.updatedAt !== news.createdAt && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        更新: {new Date(news.updatedAt).toLocaleDateString('ja-JP')}
                      </span>
                    )}
                  </div>

                  {news.summary && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-8">
                      <p className="text-gray-700 font-medium">{news.summary}</p>
                    </div>
                  )}
                  
                  <div className="prose prose-lg max-w-none news-content">
                    {isHtmlContent ? (
                      <div 
                        dangerouslySetInnerHTML={{ __html: news.content }}
                      />
                    ) : (
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                      >
                        {news.content}
                      </ReactMarkdown>
                    )}
                  </div>

                  {news.tags && news.tags.length > 0 && (
                    <div className="mt-8 pt-8 border-t">
                      <div className="flex flex-wrap gap-2">
                        {news.tags.map((tag) => (
                          <Link
                            key={tag}
                            href={`/news?tag=${tag}`}
                            className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 transition-colors"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 pt-8 border-t flex justify-between items-center">
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      シェア
                    </button>
                    
                    <div className="text-sm text-gray-500">
                      投稿日: {formatDate(news.createdAt)}
                    </div>
                  </div>
                </div>
              </article>

              <div className="mt-8 flex justify-center gap-4">
                <Link 
                  href="/news" 
                  className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  お知らせ一覧へ
                </Link>
                <Link 
                  href="/" 
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  トップページへ
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-bold mb-4">関連するお知らせ</h2>
                  <div className="space-y-4">
                    {relatedNews.filter(item => item.id !== news.id).map((item) => (
                      <Link
                        key={item.id}
                        href={`/news/${item.id}`}
                        className="block group"
                      >
                        <div className="pb-4 border-b last:border-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                              {item.category}
                            </span>
                            <span className="text-xs text-gray-500">{item.date}</span>
                          </div>
                          <h3 className="font-medium text-sm group-hover:text-green-600 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold mb-3">お問い合わせ</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    ご不明な点がございましたら、お気軽にお問い合わせください。
                  </p>
                  <a
                    href="tel:048-222-0700"
                    className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    048-222-0700
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .news-content {
          color: #374151;
          line-height: 1.8;
        }
        .news-content h1,
        .news-content h2,
        .news-content h3 {
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .news-content h1 {
          font-size: 1.875rem;
        }
        .news-content h2 {
          font-size: 1.5rem;
        }
        .news-content h3 {
          font-size: 1.25rem;
        }
        .news-content p {
          margin-bottom: 1rem;
        }
        .news-content ul,
        .news-content ol {
          margin-bottom: 1rem;
          padding-left: 2rem;
        }
        .news-content li {
          margin-bottom: 0.5rem;
        }
        .news-content strong {
          font-weight: 600;
        }
        .news-content a {
          color: #10b981;
          text-decoration: underline;
        }
        .news-content a:hover {
          color: #059669;
        }
        .news-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
        .news-content blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
        }
        .news-content code {
          background-color: #f3f4f6;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
        }
        .news-content pre {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
        }
        .news-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        .news-content th,
        .news-content td {
          border: 1px solid #e5e7eb;
          padding: 0.5rem;
        }
        .news-content th {
          background-color: #f9fafb;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}