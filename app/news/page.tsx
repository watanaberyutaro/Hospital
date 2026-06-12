'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Tag as TagIcon, Eye, Clock, Pin, AlertCircle, Search, Filter } from 'lucide-react';

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

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      setNews(data.news);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '重要なお知らせ':
        return 'bg-red-100 text-red-800 border-red-200';
      case '診療時間変更':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case '休診情報':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case '診療案内':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'イベント':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case '健康情報':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const categories = ['すべて', '重要なお知らせ', '診療案内', '診療時間変更', '休診情報', 'イベント', '健康情報', 'その他'];
  
  // Extract all unique tags
  const allTags = Array.from(new Set(news.flatMap(item => item.tags || [])));

  // Filter news based on category, search query, and tag
  let filteredNews = news;
  
  if (selectedCategory !== 'すべて') {
    filteredNews = filteredNews.filter(item => item.category === selectedCategory);
  }
  
  if (searchQuery) {
    filteredNews = filteredNews.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.summary && item.summary.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }
  
  if (selectedTag) {
    filteredNews = filteredNews.filter(item => 
      item.tags && item.tags.includes(selectedTag)
    );
  }

  // Sort: pinned first, then by date
  filteredNews.sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Strip HTML tags for display
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">お知らせ一覧</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">お知らせ一覧</h1>
          <Link href="/" className="text-green-600 hover:text-green-700">
            ← トップページに戻る
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="お知らせを検索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4" />
                フィルター
              </button>
            </div>

            {/* Categories */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                    {category === 'すべて' && (
                      <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                        {news.length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            {allTags.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TagIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">タグ:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag('')}
                    className={`text-sm px-3 py-1 rounded-full transition-colors ${
                      !selectedTag
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    すべて
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`text-sm px-3 py-1 rounded-full transition-colors ${
                        selectedTag === tag
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results count */}
          <div className="mb-6 text-sm text-gray-600">
            {filteredNews.length}件のお知らせが見つかりました
          </div>

          {filteredNews.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-md">
              <p className="text-gray-500">該当するお知らせはありません</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`} className="group">
                  <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="p-6 flex-1 flex flex-col">
                      {(item.isPinned || item.isImportant) && (
                        <div className="flex gap-2 mb-3">
                          {item.isPinned && (
                            <span className="bg-blue-500 text-white p-1.5 rounded-full shadow">
                              <Pin className="w-3 h-3" />
                            </span>
                          )}
                          {item.isImportant && (
                            <span className="bg-red-500 text-white p-1.5 rounded-full shadow">
                              <AlertCircle className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                      </div>
                      
                      <h2 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h2>
                      
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                        {item.summary || stripHtml(item.content)}
                      </p>
                      
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                          {item.tags.length > 3 && (
                            <span className="text-xs text-gray-500">+{item.tags.length - 3}</span>
                          )}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {item.viewCount || 0}
                        </span>
                        {item.updatedAt !== item.createdAt && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            更新済み
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}