'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FileText, Calendar, LogOut } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = 'admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              管理画面
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              コンテンツを管理します
            </p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            ログアウト
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => router.push('/admin/news')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-1">お知らせ管理</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  お知らせの作成・編集・削除
                </p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => router.push('/admin/holidays')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-1">休診日管理</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  臨時休業日の設定・管理
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}