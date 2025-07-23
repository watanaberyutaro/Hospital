import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { 
  Activity, 
  Shield, 
  Users, 
  ClipboardCheck,
  Microscope,
  AlertCircle,
  Calendar,
  Stethoscope
} from 'lucide-react'

export default function GastroenterologyPage() {
  const conditions = [
    '逆流性食道炎',
    '胃炎・胃潰瘍',
    '十二指腸潰瘍',
    'ピロリ菌感染症',
    '過敏性腸症候群',
    '潰瘍性大腸炎',
    'クローン病',
    '慢性便秘症',
    '脂肪肝',
    '肝機能障害',
    '胆石症',
    '膵炎',
  ]

  const symptoms = [
    {
      category: '上腹部症状',
      items: ['胸やけ', '胃痛', '胃もたれ', '吐き気', '食欲不振'],
    },
    {
      category: '下腹部症状',
      items: ['腹痛', '下痢', '便秘', '血便', '腹部膨満感'],
    },
    {
      category: '肝臓・胆のう症状',
      items: ['黄疸', '右上腹部痛', '倦怠感', '皮膚のかゆみ'],
    },
  ]

  const examinations = [
    {
      name: 'ピロリ菌検査',
      description: '胃がんのリスクとなるピロリ菌の有無を調べます',
      icon: Microscope,
    },
    {
      name: '腹部エコー検査',
      description: '肝臓、胆のう、膵臓などの状態を確認します',
      icon: Shield,
    },
    {
      name: '血液検査（肝機能）',
      description: 'AST、ALT、γ-GTPなど肝機能マーカーを測定します',
      icon: ClipboardCheck,
    },
    {
      name: '便潜血検査',
      description: '大腸がんのスクリーニング検査として行います',
      icon: Activity,
    },
  ]

  const doctors = [
    {
      name: '植村 博之',
      title: '院長',
      qualification: '医学博士・消化器専門',
    },
    {
      name: '植村 隼人',
      title: '副院長',
      qualification: '消化器病専門医・肝臓内科専門医',
    },
    {
      name: '植村 伶央',
      title: '医師',
      qualification: '消化器内科',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: '診療内容', href: '/departments' },
            { label: '消化器内科' }
          ]} />
          <SectionHeading 
            title="消化器内科"
            subtitle="食道から大腸まで消化器全般の診断・治療を行います"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Activity className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">消化器内科について</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    消化器内科では、食道・胃・十二指腸・小腸・大腸などの消化管、および肝臓・胆のう・膵臓などの消化器系臓器の病気を専門的に診療しています。
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    当院では、日本消化器病学会専門医・日本肝臓学会専門医が在籍し、最新の知識と豊富な経験に基づいた診療を提供しています。
                    症状に応じて適切な検査を行い、正確な診断と効果的な治療を行います。
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    内視鏡検査が必要な場合は、当院の内視鏡センターで苦痛の少ない検査を受けることができます。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">こんな症状はありませんか？</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {symptoms.map((group, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-sm text-amber-700 dark:text-amber-300 mb-2">
                          {group.category}
                        </h4>
                        <ul className="space-y-1">
                          {group.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                              <span className="w-1 h-1 bg-amber-600 dark:bg-amber-400 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
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
                  専門外来
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <h4 className="font-medium mb-1">ピロリ菌外来</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      ピロリ菌の検査から除菌治療まで一貫して行います
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <h4 className="font-medium mb-1">肝臓外来</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      脂肪肝、肝炎、肝硬変などの診断・治療を行います
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <h4 className="font-medium mb-1">IBD外来</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      潰瘍性大腸炎・クローン病の専門的治療を提供します
                    </p>
                  </div>
                </div>
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
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ※内視鏡検査（胃カメラ・大腸カメラ）については、
                  <a href="/departments/endoscopy" className="text-primary hover:underline">内視鏡センター</a>
                  のページをご覧ください。
                </p>
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

            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="text-xl font-semibold mb-4">早期受診をお勧めします</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                消化器の病気は早期発見・早期治療が重要です。以下のような症状がある場合は、お早めにご相談ください。
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>胃痛や胸やけが続く</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>便通異常（下痢・便秘）が続く</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>血便や黒い便が出る</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>体重減少や食欲不振</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>健康診断で肝機能異常を指摘された</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="tel:048-222-0700">
                    電話で相談する
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/departments/endoscopy">
                    内視鏡検査について
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