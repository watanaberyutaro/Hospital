import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Pagination } from '@/components/ui/Pagination'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: '新型コロナウイルス感染症に関する当院の取り組み',
      excerpt: '当院では、新型コロナウイルス感染症の拡大防止に向けた取り組みを実施しております。院内感染防止対策の詳細をご確認ください。',
      date: '2024-01-15',
      category: 'お知らせ',
      slug: 'covid-19-measures',
      featured: true,
    },
    {
      id: 2,
      title: '診療時間変更のお知らせ',
      excerpt: '2024年2月より、一部診療科の診療時間を変更いたします。詳細は本文をご確認ください。',
      date: '2024-01-10',
      category: '診療案内',
      slug: 'schedule-change',
      featured: false,
    },
    {
      id: 3,
      title: '健康診断のご案内',
      excerpt: '当院では、各種健康診断を実施しております。企業健診から個人健診まで幅広く対応いたします。',
      date: '2024-01-05',
      category: '健康診断',
      slug: 'health-checkup',
      featured: false,
    },
    {
      id: 4,
      title: '年末年始の診療について',
      excerpt: '年末年始の診療スケジュールについてお知らせいたします。救急外来は24時間対応しております。',
      date: '2023-12-20',
      category: '診療案内',
      slug: 'year-end-schedule',
      featured: false,
    },
    {
      id: 5,
      title: '新しい医療機器を導入しました',
      excerpt: '最新のMRI装置を導入し、より精密な診断が可能になりました。検査時間も短縮され、患者様の負担軽減を図ります。',
      date: '2023-12-15',
      category: '設備案内',
      slug: 'new-mri-equipment',
      featured: false,
    },
    {
      id: 6,
      title: 'インフルエンザ予防接種について',
      excerpt: 'インフルエンザ予防接種を実施しています。予約制となっておりますので、事前にお電話でご予約ください。',
      date: '2023-12-10',
      category: '予防接種',
      slug: 'flu-vaccination',
      featured: false,
    },
  ]

  const categories = [
    { name: 'すべて', count: 6 },
    { name: 'お知らせ', count: 1 },
    { name: '診療案内', count: 2 },
    { name: '健康診断', count: 1 },
    { name: '設備案内', count: 1 },
    { name: '予防接種', count: 1 },
  ]

  const featuredNews = newsItems.find(item => item.featured)
  const regularNews = newsItems.filter(item => !item.featured)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'お知らせ' }]} />
          <SectionHeading 
            title="お知らせ"
            subtitle="病院からの最新情報をお届けします"
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
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {featuredNews.excerpt}
                      </p>
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
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
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
                  アーカイブ
                </h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <span className="text-gray-700 dark:text-gray-300">2024年1月</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">3</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <span className="text-gray-700 dark:text-gray-300">2023年12月</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">3</span>
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}