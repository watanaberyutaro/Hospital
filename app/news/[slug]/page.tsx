import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Calendar, Tag, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

// This would normally come from MDX files or a CMS
const getNewsData = async (slug: string) => {
  const news: { [key: string]: any } = {
    'covid-19-measures': {
      title: '新型コロナウイルス感染症に関する当院の取り組み',
      date: '2024-01-15',
      category: 'お知らせ',
      author: '病院管理部',
      excerpt: '当院では、新型コロナウイルス感染症の拡大防止に向けた取り組みを実施しております。',
      content: `
        <h2>新型コロナウイルス感染症に関する当院の取り組み</h2>
        <p>当院では、患者様と職員の安全を最優先に考え、新型コロナウイルス感染症の拡大防止に向けた様々な取り組みを実施しております。</p>
        
        <h3>感染防止対策</h3>
        <h4>院内環境の整備</h4>
        <ul>
          <li>待合室の座席配置の見直し（ソーシャルディスタンスの確保）</li>
          <li>定期的な換気の実施</li>
          <li>院内各所にアルコール消毒液を設置</li>
          <li>診察室・処置室の徹底的な消毒</li>
        </ul>
        
        <h4>職員の感染防止策</h4>
        <ul>
          <li>全職員の健康管理の徹底</li>
          <li>適切な個人防護具（PPE）の着用</li>
          <li>定期的な感染防止研修の実施</li>
        </ul>
        
        <h3>来院される皆様へのお願い</h3>
        <p>来院前に以下の症状がないかご確認ください：</p>
        <ul>
          <li>発熱（37.5度以上）</li>
          <li>咳、のどの痛み</li>
          <li>息苦しさ、胸の痛み</li>
          <li>嗅覚・味覚の異常</li>
          <li>倦怠感</li>
        </ul>
        
        <h3>発熱外来について</h3>
        <p>発熱や風邪症状のある患者様には、専用の発熱外来を設置しております。</p>
        <ul>
          <li>診療時間：月〜金 14:00-16:00</li>
          <li>完全予約制（事前にお電話ください）</li>
          <li>一般外来とは別の入口・待合室を使用</li>
        </ul>
        
        <p>皆様のご理解とご協力をお願いいたします。</p>
      `,
      tags: ['新型コロナウイルス', '感染防止対策', '発熱外来', '安全対策'],
    },
    'schedule-change': {
      title: '診療時間変更のお知らせ',
      date: '2024-01-10',
      category: '診療案内',
      author: '事務局',
      excerpt: '2024年2月より、一部診療科の診療時間を変更いたします。',
      content: `
        <h2>診療時間変更のお知らせ</h2>
        <p>2024年2月1日より、以下の診療科の診療時間を変更いたします。</p>
        
        <h3>変更内容</h3>
        <h4>整形外科</h4>
        <p><strong>変更前：</strong> 月〜金 9:00-12:00、14:00-17:00</p>
        <p><strong>変更後：</strong> 月〜金 9:00-12:00、14:00-18:00</p>
        
        <h4>眼科</h4>
        <p><strong>変更前：</strong> 月・水・金 9:00-12:00、14:00-17:00</p>
        <p><strong>変更後：</strong> 月・水・金 9:00-12:00、14:00-16:00</p>
        
        <h3>変更理由</h3>
        <p>患者様により良い医療サービスを提供するため、診療時間を見直しいたします。</p>
        
        <h3>お問い合わせ</h3>
        <p>ご不明な点がございましたら、お気軽にお問い合わせください。</p>
        <p><strong>電話：</strong> 03-1234-5678</p>
      `,
      tags: ['診療時間', '変更', '整形外科', '眼科'],
    },
  }

  return news[slug] || null
}

export default async function NewsPage({ params }: { params: { slug: string } }) {
  const news = await getNewsData(params.slug)

  if (!news) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'お知らせ', href: '/news' },
            { label: news.title }
          ]} />
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" asChild>
              <Link href="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                一覧に戻る
              </Link>
            </Button>
          </div>
          <SectionHeading 
            title={news.title}
            subtitle=""
            center={false}
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Card className="p-8">
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {news.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {news.author}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {news.excerpt}
                  </p>
                </div>
                
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />
                
                {news.tags && (
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      タグ
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {news.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  記事情報
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">カテゴリー</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{news.category}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">公開日</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{news.date}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">投稿者</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{news.author}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  お問い合わせ
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  この記事に関するご質問やご不明な点がございましたら、お気軽にお問い合わせください。
                </p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-gray-900 dark:text-white">電話:</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">03-1234-5678</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-900 dark:text-white">メール:</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">info@hospital.example.com</span>
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

export async function generateStaticParams() {
  return [
    { slug: 'covid-19-measures' },
    { slug: 'schedule-change' },
    { slug: 'health-checkup' },
    { slug: 'year-end-schedule' },
    { slug: 'new-mri-equipment' },
    { slug: 'flu-vaccination' },
  ]
}