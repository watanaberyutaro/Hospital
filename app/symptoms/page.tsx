import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AlertCircle, Thermometer, Heart, Stethoscope, Activity, Brain, Phone } from 'lucide-react'
import Link from 'next/link'

export default function SymptomsPage() {
  const symptoms = [
    {
      icon: Thermometer,
      title: '発熱・風邪症状',
      symptoms: ['38度以上の発熱', '咳・痰', '喉の痛み', '鼻水・鼻づまり'],
      description: 'インフルエンザや風邪の可能性があります。早期の診断と適切な治療が重要です。',
      alert: '高熱が3日以上続く場合は、すぐに受診してください。',
    },
    {
      icon: Heart,
      title: '胸の痛み・動悸',
      symptoms: ['胸の圧迫感', '息切れ', '不整脈', '冷や汗'],
      description: '心臓疾患の可能性があります。早急な検査が必要な場合があります。',
      alert: '胸痛が15分以上続く場合は、救急車を呼んでください。',
    },
    {
      icon: Activity,
      title: '腹痛・消化器症状',
      symptoms: ['急な腹痛', '下痢・便秘', '吐き気・嘔吐', '血便'],
      description: '消化器疾患の可能性があります。内視鏡検査が必要な場合があります。',
      alert: '血便や激しい腹痛がある場合は、すぐに受診してください。',
    },
    {
      icon: Stethoscope,
      title: '健診異常値',
      symptoms: ['肝機能異常（GPT高値）', '血糖値異常', 'コレステロール高値', '尿酸値異常'],
      description: '生活習慣病の可能性があります。詳しい検査と治療計画が必要です。',
      alert: '放置すると重大な疾患につながる可能性があります。',
    },
    {
      icon: Brain,
      title: 'めまい・頭痛',
      symptoms: ['回転性めまい', '頭痛', 'ふらつき', '吐き気'],
      description: '内耳疾患や血圧異常の可能性があります。',
      alert: '突然の激しい頭痛は、すぐに受診してください。',
    },
  ]

  const examinations = [
    {
      title: '実施可能な検査',
      items: [
        { name: '胃カメラ（GF）', description: '食道・胃・十二指腸の検査' },
        { name: '大腸カメラ（CF）', description: '大腸全体の検査' },
        { name: '胸部X線', description: '肺・心臓の検査' },
        { name: '心電図（EKG）', description: '不整脈・心疾患の検査' },
        { name: 'エコー検査', description: '腹部臓器の検査' },
        { name: '各種血液検査', description: '肝機能・腎機能・血糖値など' },
      ]
    },
    {
      title: '連携検査',
      items: [
        { name: 'CT検査', description: '近隣医療機関と連携して実施' },
        { name: 'MRI検査', description: '精密検査が必要な場合' },
      ]
    }
  ]

  const vaccines = [
    { name: 'インフルエンザワクチン', period: '10月～1月', target: '全年齢対象' },
    { name: '肺炎球菌ワクチン', period: '通年', target: '65歳以上推奨' },
    { name: '帯状疱疹ワクチン', period: '通年', target: '50歳以上推奨' },
    { name: 'B型肝炎ワクチン', period: '通年', target: '医療従事者・リスクのある方' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="よくある症状と検査"
            subtitle="このような症状でお困りの方はご相談ください"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Card className="p-6 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">コロナ抗体検査 実施中</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      新型コロナウイルスの抗体検査を実施しています。
                      ワクチン接種後の抗体価測定も可能です。
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-8">よくある症状と解説</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {symptoms.map((symptom, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-800 rounded-lg">
                      <symptom.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{symptom.title}</h3>
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">主な症状：</p>
                        <ul className="space-y-1">
                          {symptom.symptoms.map((s, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {symptom.description}
                      </p>
                      {symptom.alert && (
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                          <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                            ⚠️ {symptom.alert}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-8">実施できる検査</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {examinations.map((exam, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{exam.title}</h3>
                  <div className="space-y-3">
                    {exam.items.map((item, i) => (
                      <div key={i} className="border-b pb-3 last:border-0">
                        <h4 className="font-medium mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-8">各種ワクチン接種</h2>
            <Card className="p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vaccines.map((vaccine, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-1">{vaccine.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      実施期間: {vaccine.period}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      対象: {vaccine.target}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  ※ワクチン接種は予約制です。お電話でご予約ください。
                </p>
              </div>
            </Card>

            <div className="text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                症状についてご不明な点がございましたら、お気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:048-222-0700" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    電話で相談する
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    お問い合わせフォーム
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}