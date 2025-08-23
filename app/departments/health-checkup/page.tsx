import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { 
  Heart,
  CheckCircle, 
  Clock, 
  Shield,
  Phone,
  AlertCircle,
  ClipboardCheck,
  Calendar,
  Users,
  FileText
} from 'lucide-react'

export default function HealthCheckupPage() {
  const checkupTypes = [
    {
      title: '特定健康診査',
      target: '40歳～74歳の国民健康保険加入者',
      content: '身体測定、血圧測定、血液検査、尿検査、心電図など',
      price: '無料～1,000円程度（自治体により異なる）'
    },
    {
      title: '企業健診',
      target: '企業・事業所にお勤めの方',
      content: '労働安全衛生法に基づく定期健康診断',
      price: '企業契約により異なります'
    },
    {
      title: '川口市がん検診',
      target: '川口市在住の対象年齢の方',
      content: '胃がん、大腸がん、肺がん検診',
      price: '各検診500円～1,500円（年齢により無料）'
    },
    {
      title: '人間ドック（局所的）',
      target: '健康状態を詳しく調べたい方',
      content: '基本検査＋腹部超音波、胃カメラ、腫瘍マーカーなど',
      price: '30,000円～（検査内容により異なる）'
    }
  ]

  const examinations = [
    {
      category: '基本検査',
      items: [
        '身体測定（身長・体重・BMI・腹囲）',
        '血圧測定',
        '視力・聴力検査',
        '尿検査（蛋白・糖・潜血）'
      ]
    },
    {
      category: '血液検査',
      items: [
        '肝機能検査（AST・ALT・γ-GTP）',
        '脂質検査（中性脂肪・HDL・LDLコレステロール）',
        '血糖検査（空腹時血糖・HbA1c）',
        '腎機能検査（クレアチニン・尿酸）',
        '貧血検査（赤血球・ヘモグロビン）'
      ]
    },
    {
      category: '画像検査',
      items: [
        '胸部レントゲン検査',
        '心電図検査',
        '腹部超音波検査（オプション）',
        '胃内視鏡検査（オプション）'
      ]
    }
  ]

  const features = [
    {
      icon: ClipboardCheck,
      title: '充実した検査項目',
      description: '基本検査から精密検査まで幅広く対応'
    },
    {
      icon: Users,
      title: '経験豊富な医師',
      description: '専門医による正確な診断と丁寧な説明'
    },
    {
      icon: Clock,
      title: '迅速な結果報告',
      description: '検査結果は約2週間でお渡しします'
    },
    {
      icon: FileText,
      title: '詳細な健康診断書',
      description: '分かりやすい診断書と健康アドバイス'
    }
  ]

  const process = [
    { step: 1, title: '予約', description: '電話またはWebで予約' },
    { step: 2, title: '検査前準備', description: '食事制限などの事前準備' },
    { step: 3, title: '受診', description: '各種検査を実施' },
    { step: 4, title: '結果説明', description: '医師による結果説明と健康相談' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: '診療科', href: '/departments' },
            { label: '健康診断' }
          ]} />
          <SectionHeading 
            title="健康診断・人間ドック"
            subtitle="定期的な健康チェックで病気の早期発見・予防を"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                健康診断について
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                当院では、川口市の特定健診をはじめ、企業健診、人間ドックなど、
                様々な健康診断に対応しています。定期的な健康チェックにより、
                生活習慣病やがんなどの早期発見・早期治療が可能になります。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 mb-12 border-l-4 border-primary bg-primary-50 dark:bg-primary-900/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                健診の種類と内容
              </h3>
              <div className="space-y-6">
                {checkupTypes.map((type, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                    <h4 className="font-semibold text-lg text-primary mb-2">
                      {type.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      対象：{type.target}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {type.content}
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      料金：{type.price}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                検査項目
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {examinations.map((category, index) => (
                  <Card key={index} className="p-6">
                    <h4 className="font-semibold text-primary mb-3">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-8 mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg mb-3">検査前の注意事項</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• 検査前日の夜9時以降は絶食してください</li>
                    <li>• 水分は水やお茶のみ可能です（検査2時間前まで）</li>
                    <li>• 常用薬がある方は事前にご相談ください</li>
                    <li>• 検査当日は楽な服装でお越しください</li>
                    <li>• 健康保険証を必ずお持ちください</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                受診の流れ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {process.map((item, index) => (
                  <div key={index} className="relative">
                    <Card className="p-4 text-center">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                        {item.step}
                      </div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </Card>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                オプション検査
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                基本検査に加えて、以下のオプション検査もご用意しています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">腫瘍マーカー検査</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    CEA、CA19-9、PSA（男性）、CA125（女性）など
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">動脈硬化検査</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    血管年齢測定、頸動脈エコー検査
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">骨密度検査</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    骨粗しょう症の早期発見
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">アレルギー検査</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    39項目のアレルゲン検査（View39）
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                予約・お問い合わせ
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                健康診断は予約制となっております。お電話でご予約ください。
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <p>受付時間：平日 9:00～17:30</p>
                <p>電話番号：048-222-0700</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="tel:048-222-0700" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    電話で予約
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">お問い合わせフォーム</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}