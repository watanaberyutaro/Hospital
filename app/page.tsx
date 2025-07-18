import { Hero } from '@/components/ui/Hero'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Calendar, Clock, MapPin, Phone } from 'lucide-react'

export default function HomePage() {
  const newsItems = [
    {
      id: 1,
      title: '新型コロナウイルス感染症に関する当院の取り組み',
      date: '2024-01-15',
      category: 'お知らせ',
      excerpt: '当院では、新型コロナウイルス感染症の拡大防止に向けた取り組みを実施しております。',
    },
    {
      id: 2,
      title: '診療時間変更のお知らせ',
      date: '2024-01-10',
      category: '診療案内',
      excerpt: '2024年2月より、一部診療科の診療時間を変更いたします。',
    },
    {
      id: 3,
      title: '健康診断のご案内',
      date: '2024-01-05',
      category: '健康診断',
      excerpt: '当院では、各種健康診断を実施しております。ご予約はお電話にて承っております。',
    },
  ]

  const quickAccess = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: '診療予約',
      description: 'オンラインで簡単に診療予約ができます',
      href: '/appointment',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '診療時間',
      description: '各科の診療時間をご確認いただけます',
      href: '/schedule',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'アクセス',
      description: '当院への交通アクセスのご案内',
      href: '/access',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'お問い合わせ',
      description: 'ご質問やご相談はこちらから',
      href: '/contact',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="クイックアクセス"
            subtitle="よくご利用いただく機能へのご案内"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccess.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={item.href}>詳細を見る</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="最新のお知らせ"
            subtitle="病院からの重要なお知らせをご確認ください"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/news/${item.id}`}>続きを読む</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <a href="/news">すべてのお知らせを見る</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}