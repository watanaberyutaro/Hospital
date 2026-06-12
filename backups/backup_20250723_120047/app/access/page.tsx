import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MapPin, Train, Bus, Car, Phone, Clock } from 'lucide-react'

export default function AccessPage() {
  const accessInfo = [
    {
      icon: <Train className="w-6 h-6" />,
      title: '電車でお越しの方',
      content: [
        '埼玉高速鉄道 川口元郷駅 1番出口より徒歩10分',
        'JR京浜東北線 川口駅東口よりバスで約15分',
      ],
    },
    {
      icon: <Bus className="w-6 h-6" />,
      title: 'バスでお越しの方',
      content: [
        '国際興業バス「新井町」停留所下車すぐ',
        '川口駅東口より「川口元郷駅行き」または「新井宿駅行き」乗車',
      ],
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'お車でお越しの方',
      content: [
        'クリニック前後に患者様専用駐車場8台完備',
        '新井町交差点角の建物です',
        '満車の場合は近隣のコインパーキングをご利用ください',
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
                      埼玉県川口市新井町16-1<br />
                      新井町交差点角
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
                        <p>月火水金: 9:00-12:30 / 16:00-18:30</p>
                        <p>木土: 9:00-12:30（午後休診）</p>
                        <p>日祝: 休診</p>
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
                <div className="aspect-[4/3] bg-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-xl font-semibold mb-2">地図</p>
                    <p className="text-muted-foreground">
                      Google マップで見る
                    </p>
                  </div>
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
                  クリニック専用駐車場を8台分ご用意しております。
                  満車の場合は、お手数ですが近隣のコインパーキングをご利用ください。
                </p>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  駐車場の空き状況を確認
                </Button>
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
                  初診の方は保険証を必ずお持ちください
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
                  受付時間は診療終了時間の30分前までとなります
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