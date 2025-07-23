import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Pagination } from '@/components/ui/Pagination'
import { FutureUpdate } from '@/components/ui/FutureUpdate'
import { Calendar, Tag, ArrowRight, Bell, FileText, Heart } from 'lucide-react'

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: '年末年始の診療について',
      excerpt: '12月29日（日）から1月3日（金）まで休診とさせていただきます。1月4日（土）より通常診療を開始いたします。',
      date: '2025-12-15',
      category: 'お知らせ',
      slug: 'year-end-schedule',
      featured: true,
    },
    {
      id: 2,
      title: '電子カルテ導入による予約システム開始予定',
      excerpt: '電子カルテ導入に伴い、オンライン予約システムを開始予定です。現在は予約外診療（内視鏡検査を除く）のみ対応しております。',
      date: '2025-11-20',
      category: 'お知らせ',
      slug: 'reservation-system',
      featured: false,
      hasFutureUpdate: true,
    },
    {
      id: 3,
      title: '看護師募集のお知らせ',
      excerpt: '当院では看護師を若干名募集しております。詳細はお電話にてお問い合わせください。',
      date: '2025-11-01',
      category: '採用情報',
      slug: 'nurse-recruitment',
      featured: false,
    },
    {
      id: 4,
      title: 'インフルエンザワクチン接種開始',
      excerpt: '今年度のインフルエンザワクチン接種を開始しました。ご希望の方はお電話にてご予約ください。',
      date: '2025-10-15',
      category: '診療案内',
      slug: 'influenza-vaccine',
      featured: false,
    },
    {
      id: 5,
      title: '健康コラム：生活習慣病の予防について',
      excerpt: '生活習慣病は日々の生活習慣の改善により予防することができます。適度な運動と食事管理が重要です。',
      date: '2025-10-01',
      category: '健康情報',
      slug: 'health-column',
      featured: false,
      hasFutureUpdate: true,
    },
    {
      id: 6,
      title: 'マイナ保険証の利用について',
      excerpt: '当院ではマイナンバーカードの健康保険証利用に対応しております。受付にてカードリーダーをご利用ください。',
      date: '2025-09-20',
      category: '診療案内',
      slug: 'mynumber-card',
      featured: false,
    },
  ]

  const categories = [
    { name: 'すべて', count: 6 },
    { name: 'お知らせ', count: 2 },
    { name: '診療案内', count: 2 },
    { name: '健康情報', count: 1 },
    { name: '採用情報', count: 1 },
  ]

  const featuredNews = newsItems.find(item => item.featured)
  const regularNews = newsItems.filter(item => !item.featured)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'お知らせ' }]} />
          <SectionHeading 
            title="お知らせ・最新情報"
            subtitle="クリニックからの重要なお知らせと健康情報をお届けします"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {featuredNews && (
                <Card className="mb-8 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-800 dark:to-primary-900 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-primary text-4xl font-bold mb-2">注目</div>
                        <div className="text-gray-600 dark:text-gray-300">FEATURED</div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                          {featuredNews.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredNews.date}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {featuredNews.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {featuredNews.excerpt}
                      </p>
                      {featuredNews.hasFutureUpdate && (
                        <div className="mb-4">
                          <FutureUpdate />
                        </div>
                      )}
                      <Button asChild>
                        <Link href={`/news/${featuredNews.slug}`}>
                          詳細を見る
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularNews.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                          {item.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                        {item.excerpt}
                      </p>
                      {item.hasFutureUpdate && (
                        <div className="mb-3">
                          <FutureUpdate />
                        </div>
                      )}
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/news/${item.slug}`}>
                          続きを読む
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-12">
                <Pagination currentPage={1} totalPages={3} baseUrl="/news" />
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  カテゴリー
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <span className="text-gray-700 dark:text-gray-300">
                        {category.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  将来の予定
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <FutureUpdate message="メールマガジン機能は今後実装予定です" />
                  </div>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <FutureUpdate message="LINE公式アカウントは準備中です" />
                  </div>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <FutureUpdate message="SNS連携機能は今後追加予定です" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}