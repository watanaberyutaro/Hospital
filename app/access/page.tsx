import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MapPin, Train, Bus, Car, Phone, Clock } from 'lucide-react'

export default function AccessPage() {
  const accessInfo = [
    {
      icon: <Train className="w-6 h-6" />,
      title: '川口元郷駅から',
      content: [
        '川口元郷駅より徒歩13分もしくはバス約2分',
        '（元郷一丁目下車徒歩3分。新井町交差点角）',
      ],
    },
    {
      icon: <Bus className="w-6 h-6" />,
      title: '川口駅東口から',
      content: [
        '【のりば1】川０２・川０２－２',
        '【のりば2】川１５・川１５－３',
        '【のりば3】川０４・川１４－２・川１６',
        '「元郷一丁目」下車徒歩3分',
        '（元郷一丁目下車徒歩3分。新井町交差点角）',
      ],
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'お車でお越しの方',
      content: [
        '駐車場完備（軽自動車1台、普通車10台）',
        'Google Map / ストリートビュー対応',
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="アクセス"
            subtitle="新井町内科消化器クリニックへの交通案内"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 mb-8">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    所在地
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold mb-2">新井町内科消化器クリニック</p>
                    <p className="text-muted-foreground">
                      〒332-0005<br />
                      埼玉県川口市新井町16-1
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>TEL: 048-222-0700</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p>診療時間: 午前の部9:00～12:30 / 午後の部15:00～18:00</p>
                        <p>休診日: 日曜・祝日・その他</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {accessInfo.map((info, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary">{info.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3">{info.title}</h3>
                        <ul className="space-y-1">
                          {info.content.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-0 overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.945539283371!2d139.72086307586387!3d35.84960737260129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189315cf4c8b85%3A0x2f5c0e3b5e8b5c0a!2z44CSMzMzLTA4NDkg5Z-8546J55yM5bed5Y-j5biC5paw5LqV55S677yR77yW4oiS77yR!5e0!3m2!1sja!2sjp!4v1706077432123!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="新井町内科消化器クリニックの地図"
                  />
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  目印となる施設
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• 新井町交差点の角</li>
                  <li>• 川口元郷駅から徒歩10分</li>
                  <li>• 国際興業バス「新井町」停留所前</li>
                </ul>
              </Card>

              <Card className="p-6 bg-accent/5">
                <h3 className="font-semibold mb-4">駐車場のご案内</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  クリニック専用駐車場をご用意しております。<br />
                  軽自動車: 1台<br />
                  普通車: 10台<br />
                  満車の場合は、お手数ですが近隣のコインパーキングをご利用ください。
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">ご来院の際のお願い</h2>
            <Card className="p-8 text-left">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  初診の方は保険証もしくはマイナンバーカードを必ずお持ちください
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  お薬手帳をお持ちの方はご持参ください
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  他院からの紹介状をお持ちの方はご提示ください
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  終了30分前までの受付をお願いいたします
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-xl text-muted-foreground mb-8">
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
          <Button size="lg" className="flex items-center gap-2 mx-auto">
            <Phone className="w-5 h-5" />
            <a href="tel:048-222-0700">048-222-0700</a>
          </Button>
        </div>
      </section>
    </div>
  )
}