import { Hero } from '@/components/ui/Hero'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Calendar, Clock, MapPin, Phone } from 'lucide-react'

export default function HomePage() {
  const newsItems = [
    {
      id: 1,
      title: 'インフルエンザワクチン接種開始のお知らせ',
      date: '2024-10-15',
      category: 'お知らせ',
      excerpt: '今年度のインフルエンザワクチン接種を開始しました。ご予約はお電話にて承っております。',
    },
    {
      id: 2,
      title: 'マイナ保険証の利用について',
      date: '2024-09-20',
      category: '診療案内',
      excerpt: '当院ではマイナンバーカードの健康保険証利用に対応しております。',
    },
    {
      id: 3,
      title: '胃・大腸内視鏡検査のご案内',
      date: '2024-09-01',
      category: '検査案内',
      excerpt: '専門医による苦痛の少ない内視鏡検査を実施しています。鎮静剤の使用も可能です。',
    },
  ]

  const quickAccess = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: '電話予約',
      description: 'お電話で予約を承ります',
      href: 'tel:048-222-0700',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '診療時間',
      description: '月火水金 9:00-12:30 / 16:00-18:30',
      href: '/schedule',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'アクセス',
      description: '川口元郷駅徒歩10分・駐車場8台完備',
      href: '/access',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'お問い合わせ',
      description: 'ご質問やご相談はこちらから',
      href: '/contact',
    },
  ]

  const departments = [
    {
      name: '一般内科',
      description: 'かぜ、発熱、生活習慣病管理など日常的な健康問題に対応',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    },
    {
      name: '消化器内科',
      description: '胃痛・腹痛、便通異常、肝胆膵疾患の専門的な診断治療',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop',
    },
    {
      name: 'アレルギー科',
      description: '花粉症・食物アレルギーなどの検査と治療',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&h=600&fit=crop',
    },
    {
      name: '内視鏡検査',
      description: '苦痛の少ない胃・大腸カメラ、ポリープ切除にも対応',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="診療内容"
            subtitle="内科・消化器内科・アレルギー科の専門医が幅広く対応いたします"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{dept.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{dept.description}</p>
                  <Button variant="ghost" size="sm" className="mt-4 group-hover:text-primary" asChild>
                    <a href={`/departments/${dept.name}`}>詳しく見る →</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="院長ご挨拶"
            subtitle="地域の皆様へ"
          />
          <div className="max-w-4xl mx-auto">
            <Card className="p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">院長</span>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold">植村 博之</h3>
                      <p className="text-sm text-muted-foreground mt-1">うえむら ひろゆき</p>
                      <div className="mt-3 space-y-1">
                        <p className="text-sm text-muted-foreground">日本消化器病学会専門医</p>
                        <p className="text-sm text-muted-foreground">日本消化器内視鏡学会専門医</p>
                        <p className="text-sm text-muted-foreground">日本肝臓学会専門医</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <p className="text-lg leading-relaxed">
                    地域の皆様、こんにちは。新井町内科消化器クリニック院長の植村博之です。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    当クリニックは、地域の皆様の「かかりつけ医」として、内科全般から消化器疾患まで幅広く診療を行っております。
                    特に消化器内視鏡検査においては、長年の経験と最新の技術を活かし、苦痛の少ない検査を心がけております。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    「患者様一人ひとりに寄り添い、分かりやすい説明と丁寧な診療」をモットーに、
                    皆様が安心して受診できるクリニックを目指しています。
                    些細な体調の変化でも、お気軽にご相談ください。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    これからも地域医療に貢献し、皆様の健康維持・増進のお手伝いをさせていただきます。
                    どうぞよろしくお願いいたします。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=1200&fit=crop" 
            alt="医療イメージ"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <SectionHeading 
            title="クイックアクセス"
            subtitle="よくご利用いただく機能へのご案内"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickAccess.map((item, index) => (
              <Card key={index} className="text-center p-8 group">
                <div className="flex justify-center mb-6 text-primary p-4 bg-primary/10 rounded-2xl w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={item.href}>詳細を見る</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="最新のお知らせ"
            subtitle="クリニックからの重要なお知らせをご確認ください"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="text-muted-foreground text-sm">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                    <a href={`/news/${item.id}`}>続きを読む →</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="/news">すべてのお知らせを見る</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}