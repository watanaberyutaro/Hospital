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
      description: 'インフルエンザ、溶連菌、新型コロナウイルスの抗体検査ができます。',
      alert: '高熱が続く場合は、受診してください。',
    },
    {
      icon: Activity,
      title: '腹痛・消化器症状',
      symptoms: ['急な腹痛', '下痢・便秘', '吐き気・嘔吐', '血便'],
      description: '消化器疾患の可能性があります。内視鏡検査が必要な場合があります。',
      alert: '血便や腹痛がある場合は、受診してください。',
    },
    {
      icon: Stethoscope,
      title: '健診・がん検診で再検査を勧められた方',
      symptoms: ['肝機能異常', '血糖値異常', 'コレステロール高値', '尿酸値異常'],
      description: '血液検査での異常や、胸部X線の影など、詳しい検査と治療を行います。',
      alert: '放置すると重大な疾患につながる可能性があります。',
    },
  ]

  const examinations = [
    {
      title: '実施可能な検査',
      items: [
        { name: '胃カメラ', description: '食道・胃・十二指腸の検査' },
        { name: '大腸カメラ', description: '大腸全体の検査' },
        { name: '胸部X線', description: '肺・心臓の検査' },
        { name: '心電図', description: '不整脈・心疾患の検査' },
        { name: '腹部エコー検査', description: '腹部臓器の検査' },
        { name: '各種血液検査', description: '肝機能・腎機能・血糖値など' },
      ]
    },
    {
      title: '連携検査',
      items: [
        { name: 'CT・MRI検査', description: '近隣医療機関と連携して実施' },
      ]
    }
  ]

  const vaccines = [
    { name: 'インフルエンザワクチン', period: '10月～1月', target: '13歳以上の中学生以上' },
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

            <h2 className="text-2xl font-bold mb-8">よくある症状</h2>
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
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"></p>
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
                  ※ワクチン接種についてはお電話でご相談ください。
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}