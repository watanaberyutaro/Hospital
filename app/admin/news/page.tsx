'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Calendar, Tag, AlertCircle, Pin, Eye, X, Plus, Save, Trash2, Edit2, LogOut } from 'lucide-react';

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />
});

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

export default function AdminNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    summary: '',
    category: '重要なお知らせ',
    date: new Date().toISOString().split('T')[0],
    tags: [] as string[],
    isPinned: false,
    isImportant: false,
    author: '管理者'
  });
  const [tagInput, setTagInput] = useState('');
  const router = useRouter();

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
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingItem) {
        const response = await fetch(`/api/news/${editingItem.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setIsEditing(false);
          setEditingItem(null);
          resetForm();
          fetchNews();
        }
      } else {
        const response = await fetch('/api/news', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          resetForm();
          fetchNews();
        }
      }
    } catch (error) {
      console.error('Error saving news:', error);
    }
  };

  const handleEdit = (item: NewsItem) => {
    setIsEditing(true);
    setEditingItem(item);
    setFormData({
      title: item.title,
      content: item.content,
      summary: item.summary || '',
      category: item.category,
      date: item.date,
      tags: item.tags || [],
      isPinned: item.isPinned || false,
      isImportant: item.isImportant || false,
      author: item.author || '管理者'
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('このお知らせを削除してもよろしいですか？')) return;

    try {
      const response = await fetch(`/api/news/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchNews();
      }
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      summary: '',
      category: '重要なお知らせ',
      date: new Date().toISOString().split('T')[0],
      tags: [],
      isPinned: false,
      isImportant: false,
      author: '管理者'
    });
    setIsEditing(false);
    setEditingItem(null);
    setTagInput('');
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };


  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Edit2 className="w-8 h-8 text-green-600" />
            お知らせ管理
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            ログアウト
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                {isEditing ? (
                  <>
                    <Edit2 className="w-5 h-5" />
                    お知らせを編集
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    新規お知らせ
                  </>
                )}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      日付
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Tag className="w-4 h-4 inline mr-1" />
                      カテゴリー
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="重要なお知らせ">重要なお知らせ</option>
                      <option value="診療案内">診療案内</option>
                      <option value="診療時間変更">診療時間変更</option>
                      <option value="休診情報">休診情報</option>
                      <option value="イベント">イベント</option>
                      <option value="健康情報">健康情報</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    タイトル
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="お知らせのタイトルを入力"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    要約（一覧ページで表示）
                  </label>
                  <textarea
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={2}
                    placeholder="簡潔な要約を入力（空欄の場合は本文から自動生成）"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    本文
                  </label>
                  <RichTextEditor
                    value={formData.content}
                    onChange={(value) => setFormData({ ...formData, content: value })}
                    placeholder="お知らせの本文を入力..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    タグ
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="タグを入力してEnter"
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      追加
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isPinned}
                      onChange={(e) => setFormData({ ...formData, isPinned: e.target.checked })}
                      className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="text-sm font-medium">
                      <Pin className="w-4 h-4 inline mr-1" />
                      固定表示
                    </span>
                  </label>
                  
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isImportant}
                      onChange={(e) => setFormData({ ...formData, isImportant: e.target.checked })}
                      className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    />
                    <span className="text-sm font-medium">
                      <AlertCircle className="w-4 h-4 inline mr-1" />
                      重要マーク
                    </span>
                  </label>
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    {isEditing ? '更新' : '投稿'}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      キャンセル
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">お知らせ一覧</h2>
              
              <div className="space-y-3 max-h-[800px] overflow-y-auto">
                {news.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {item.isPinned && (
                            <Pin className="w-4 h-4 text-blue-500" />
                          )}
                          {item.isImportant && (
                            <AlertCircle className="w-4 h-4 text-red-500" />
                          )}
                          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Eye className="w-3 h-3" />
                          {item.viewCount || 0} views
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs"
                      >
                        <Edit2 className="w-3 h-3" />
                        編集
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-800 text-xs"
                      >
                        <Trash2 className="w-3 h-3" />
                        削除
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}