import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { 
  Stethoscope, 
  Heart, 
  Activity, 
  Shield, 
  Users, 
  ClipboardCheck,
  Pill,
  Calendar
} from 'lucide-react'

export default function InternalMedicinePage() {
  const conditions = [
    '風邪・インフルエンザ',
    '発熱・頭痛',
    '咳・喉の痛み',
    '腹痛・下痢',
    '高血圧',
    '糖尿病',
    '脂質異常症',
    '痛風',
    'めまい・動悸',
    '不眠症',
    'アレルギー疾患',
    '花粉症',
  ]

  const examinations = [
    {
      name: '血液検査',
      description: '貧血、肝機能、腎機能、血糖値、コレステロールなどを調べます',
      icon: ClipboardCheck,
    },
    {
      name: '尿検査',
      description: '腎臓の機能や糖尿病の有無などを確認します',
      icon: Activity,
    },
    {
      name: '心電図検査',
      description: '不整脈や心臓の異常を発見します',
      icon: Heart,
    },
    {
      name: 'レントゲン検査',
      description: '肺炎や心臓の大きさなどを確認します',
      icon: Shield,
    },
  ]

  const doctors = [
    {
      name: '植村 博之',
      title: '院長',
      qualification: '医学博士',
    },
    {
      name: '植村 隼人',
      title: '副院長',
      qualification: '内科認定医',
    },
    {
      name: '植村 伶央',
      title: '医師',
      qualification: '内科',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: '診療内容', href: '/departments' },
            { label: '一般内科' }
          ]} />
          <SectionHeading 
            title="一般内科"
            subtitle="日常的な健康問題から慢性疾患まで幅広く対応します"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Stethoscope className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">一般内科について</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    一般内科では、日常的によくある症状から生活習慣病まで、内科全般の診療を行っています。
                    「体調が悪いけれど、どの科を受診すればよいかわからない」という場合も、まずは一般内科にご相談ください。
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    必要に応じて専門的な検査や治療が必要な場合は、適切な診療科や連携医療機関をご紹介いたします。
                    地域のかかりつけ医として、患者様の健康を総合的にサポートします。
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Pill className="w-5 h-5 text-primary" />
                  主な対象疾患
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{condition}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  診療時間
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600 dark:text-gray-300">午前</span>
                    <span className="font-medium">9:00 - 12:30（最終受付）</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600 dark:text-gray-300">午後</span>
                    <span className="font-medium">15:00 - 18:00（最終受付 17:30）</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600 dark:text-gray-300">休診日</span>
                    <span className="font-medium">日曜・祝日・その他</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  ※現在は予約外診療のみ対応しております
                </p>
              </Card>
            </div>

            <Card className="p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6">主な検査項目</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {examinations.map((exam, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <exam.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{exam.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {exam.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                担当医師
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {doctors.map((doctor, index) => (
                  <div key={index} className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-12 h-12 text-primary" />
                    </div>
                    <h4 className="font-semibold">{doctor.name}</h4>
                    <p className="text-sm text-primary">{doctor.title}</p>
                    <p className="text-sm text-muted-foreground">{doctor.qualification}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-primary/5">
              <h3 className="text-xl font-semibold mb-4">受診をお勧めする症状</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                以下のような症状がある場合は、お早めにご相談ください：
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>原因不明の発熱が続く</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>慢性的な疲労感や倦怠感</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>健康診断で異常を指摘された</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>生活習慣病の管理・相談</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="tel:048-222-0700">
                    電話で相談する
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/access">
                    アクセス情報を見る
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}