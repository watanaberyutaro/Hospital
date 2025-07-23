import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FutureUpdate } from '@/components/ui/FutureUpdate'
import { 
  Heart, 
  ClipboardCheck, 
  Activity, 
  Shield, 
  Users, 
  FileText,
  CheckCircle,
  Calendar,
  AlertCircle
} from 'lucide-react'

export default function HealthCheckupPage() {
  const checkupTypes = [
    {
      name: '特定健診',
      target: '40歳～74歳の方',
      description: 'メタボリックシンドロームに着目した健診',
      icon: Heart,
      items: [
        '身体計測（身長・体重・BMI・腹囲）',
        '血圧測定',
        '血液検査（脂質・血糖・肝機能）',
        '尿検査',
        '心電図検査（医師の判断により実施）',
      ],
    },
    {
      name: '企業健診',
      target: '企業にお勤めの方',
      description: '労働安全衛生法に基づく定期健康診断',
      icon: Shield,
      items: [
        '問診・診察',
        '身体計測',
        '視力・聴力検査',
        '胸部レントゲン検査',
        '血液検査',
        '尿検査',
        '心電図検査',
      ],
    },
    {
      name: '人間ドック（局所的）',
      target: '健康管理を重視される方',
      description: '特定の臓器や部位に特化した精密検査',
      icon: Activity,
      items: [
        '消化器ドック（胃・大腸内視鏡）',
        '肝臓精密検査',
        '腹部エコー検査',
        '腫瘍マーカー検査',
        '詳細な血液検査',
      ],
    },
  ]

  const optionalTests = [
    {
      name: '胃がん検診',
      description: '胃カメラまたはバリウム検査',
      price: <FutureUpdate message="料金は今後掲載予定" />,
    },
    {
      name: '大腸がん検診',
      description: '便潜血検査（2日法）',
      price: <FutureUpdate message="料金は今後掲載予定" />,
    },
    {
      name: '肝炎ウイルス検査',
      description: 'B型・C型肝炎の検査',
      price: <FutureUpdate message="料金は今後掲載予定" />,
    },
    {
      name: '前立腺がん検診',
      description: 'PSA検査（血液検査）',
      price: <FutureUpdate message="料金は今後掲載予定" />,
    },
  ]

  const flow = [
    {
      step: '1',
      title: 'お申し込み',
      description: 'お電話にてご予約ください',
    },
    {
      step: '2',
      title: '問診票記入',
      description: '事前にお送りする問診票をご記入',
    },
    {
      step: '3',
      title: '健診当日',
      description: '受付後、各種検査を実施',
    },
    {
      step: '4',
      title: '結果説明',
      description: '後日、結果をご説明します',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: '診療内容', href: '/departments' },
            { label: '健康診断' }
          ]} />
          <SectionHeading 
            title="健康診断・人間ドック"
            subtitle="病気の早期発見と健康維持をサポートします"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Heart className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">健康診断について</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    当院では、特定健診、企業健診、人間ドック（局所的）など、各種健康診断を実施しています。
                    定期的な健康チェックにより、病気の早期発見・早期治療が可能となり、健康寿命の延伸につながります。
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    経験豊富な医師による診察と、必要に応じた精密検査により、皆様の健康管理をサポートいたします。
                  </p>
                </div>
              </div>
            </Card>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">健診コース</h3>
              <div className="grid grid-cols-1 gap-6">
                {checkupTypes.map((type, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="flex items-start gap-4 p-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <type.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-xl font-semibold">{type.name}</h4>
                            <p className="text-sm text-primary mt-1">{type.target}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {type.description}
                        </p>
                        <div className="bg-secondary/10 rounded-lg p-4">
                          <h5 className="font-medium mb-2 flex items-center gap-2">
                            <ClipboardCheck className="w-4 h-4 text-primary" />
                            検査項目
                          </h5>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {type.items.map((item, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6">オプション検査</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                基本健診に追加できる検査項目です。年齢や性別、ご家族の病歴などに応じてお選びください。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {optionalTests.map((test, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-1">{test.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {test.description}
                    </p>
                    <div className="text-sm">{test.price}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                健診の流れ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {flow.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      {item.step}
                    </div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 mb-12 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">健診を受ける際のご注意</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                      <span>前日の夜9時以降は絶食でお願いします（水分は可）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                      <span>当日の朝は禁煙でお願いします</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                      <span>お薬を服用中の方は事前にご相談ください</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                      <span>健康保険証を必ずお持ちください</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="text-xl font-semibold mb-4">健診のご予約・お問い合わせ</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                健康診断は予約制となっております。お電話にてお申し込みください。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    受付時間：診療時間内
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    団体健診も承っております
                  </span>
                </div>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg mb-6">
                <FutureUpdate message="料金詳細・所要時間は今後掲載予定です" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="tel:048-222-0700">
                    電話で予約する
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    お問い合わせ
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