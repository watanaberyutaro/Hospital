import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Phone, CheckCircle, Clock, Shield, Heart } from 'lucide-react'

export default function EndoscopyPage() {
  const examTypes = [
    {
      title: '胃カメラ（上部消化管内視鏡検査）',
      description: '経口・経鼻両方に対応',
      features: [
        '経鼻内視鏡で苦痛を軽減',
        '鎮静剤使用可能（経口の場合）',
        'ピロリ菌検査も同時実施可能',
        '検査時間約5〜10分',
      ],
      image: '/images/内視鏡センター.jpg',
    },
    {
      title: '大腸カメラ（下部消化管内視鏡検査）',
      description: '日帰りポリープ切除対応',
      features: [
        '鎮静下で苦痛の少ない検査',
        'ポリープ発見時は即日切除可能',
        '下剤の服用法を個別指導',
        '検査時間約15〜30分',
      ],
      image: '/images/内視鏡センター個室.jpg',
    },
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '安全性の確保',
      description: '最新の内視鏡システムと徹底した衛生管理で安全な検査を実施',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '苦痛の軽減',
      description: '鎮静剤の使用や経鼻内視鏡により、楽に検査を受けられます',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '迅速な結果説明',
      description: '検査終了後、画像を見ながら分かりやすく結果をご説明',
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="内視鏡センター"
            subtitle="専門医による安心・安全な内視鏡検査"
          />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-8">
              当院では日本消化器内視鏡学会専門医が、最新の内視鏡システムを用いて
              苦痛の少ない検査を実施しています。鎮静剤の使用により、
              眠っている間に検査を終えることも可能です。
            </p>
            <Button size="lg" className="flex items-center gap-2 mx-auto">
              <Phone className="w-5 h-5" />
              <a href="tel:048-222-0700">お電話はこちら 048-222-0700</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="検査内容"
            subtitle="胃カメラ・大腸カメラともに対応"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examTypes.map((exam, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={exam.image}
                    alt={exam.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{exam.title}</CardTitle>
                  <CardDescription>{exam.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exam.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="当院の特徴"
            subtitle="患者様に寄り添った検査を心がけています"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8">
                <div className="flex justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="検査の流れ"
            subtitle="事前準備から検査後まで丁寧にサポート"
          />
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">検査のご相談</h4>
                    <p className="text-muted-foreground">
                      お電話にて検査についてご相談ください。事前診察で検査の説明を行います。
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">検査前日〜当日</h4>
                    <p className="text-muted-foreground">
                      指示された食事制限や下剤の服用をお願いします。
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">検査実施</h4>
                    <p className="text-muted-foreground">
                      リラックスした状態で検査を受けていただきます。鎮静剤使用時は回復室でお休みいただきます。
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">結果説明</h4>
                    <p className="text-muted-foreground">
                      検査画像を見ながら、分かりやすく結果をご説明します。必要に応じて治療方針もご相談します。
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">内視鏡検査のご相談</h2>
          <p className="text-xl text-muted-foreground mb-8">
            検査をご希望の方は、お電話にてご相談ください
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:048-222-0700">048-222-0700</a>
            </Button>
            <p className="text-sm text-muted-foreground">
              受付時間：月火水金 9:00-12:30 / 16:00-18:30、木土 9:00-12:30
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}