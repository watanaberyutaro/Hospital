import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import {
  Activity,
  CheckCircle,
  Clock,
  Users,
  Heart,
  Shield,
  Phone,
  AlertCircle,
  Microscope,
  Stethoscope,
  TrendingUp,
  ArrowRight
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '消化器内科 | 川口市 胃痛 腹痛 便秘 下痢 逆流性食道炎 | 新井町内科消化器クリニック',
  description: '川口市新井町の消化器内科。胃痛・腹痛・便秘・下痢・逆流性食道炎などの消化器疾患を専門医が診療。予約なしで即日対応。内視鏡検査も実施。',
}

export default function GastroenterologyPage() {
  const symptoms = [
    '胃痛・胃もたれ',
    '吐き気・嘔吐',
    '胸やけ・逆流症状',
    '腹痛・腹部膨満感',
    '便秘・下痢',
    '血便・黒色便',
    '体重減少',
    '食欲不振',
    '黄疸',
    '腹部のしこり',
  ]

  const diseases = [
    {
      category: '食道・胃・十二指腸',
      items: ['逆流性食道炎', '胃潰瘍', '十二指腸潰瘍', '慢性胃炎', 'ピロリ菌感染症', '機能性ディスペプシア']
    },
    {
      category: '肝臓・胆のう・膵臓',
      items: ['脂肪肝', '肝炎', '肝硬変', '胆石症', '胆のうポリープ', '膵炎']
    },
    {
      category: '大腸・小腸',
      items: ['過敏性腸症候群', '潰瘍性大腸炎', 'クローン病', '大腸ポリープ', '憩室疾患', '便秘症']
    }
  ]

  const examinations = [
    {
      name: '胃内視鏡検査',
      description: '食道・胃・十二指腸の病変を直接観察',
      detail: '鎮静剤使用可能'
    },
    {
      name: '大腸内視鏡検査',
      description: '大腸全体の病変を詳細に観察',
      detail: 'ポリープ切除可能'
    },
    {
      name: '腹部超音波検査',
      description: '肝臓・胆のう・膵臓・腎臓を検査',
      detail: '痛みのない検査'
    },
    {
      name: 'ピロリ菌検査',
      description: '呼気試験・血液検査・便検査で診断',
      detail: '除菌治療対応'
    }
  ]

  const features = [
    {
      icon: Microscope,
      title: '専門的な内視鏡検査',
      description: '苦痛の少ない検査を心がけています'
    },
    {
      icon: Stethoscope,
      title: '消化器病専門医',
      description: '日本消化器病学会認定の専門医が診療'
    },
    {
      icon: Shield,
      title: '早期発見・早期治療',
      description: 'がんの早期発見に努めています'
    },
    {
      icon: Heart,
      title: '総合的な診療',
      description: '消化器疾患全般に幅広く対応'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: '診療科', href: '/departments' },
            { label: '消化器内科' }
          ]} />
          <SectionHeading 
            title="消化器内科"
            subtitle="胃腸・肝臓・胆のう・膵臓の専門的な診断と治療"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                診療内容
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                消化器内科では、食道から胃・十二指腸、小腸、大腸、肝臓、胆のう、膵臓まで、
                消化器系全般の疾患を専門的に診断・治療しています。
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                日本消化器病学会専門医、日本消化器内視鏡学会専門医、日本肝臓学会専門医の資格を持つ医師が、
                最新の知識と技術で診療にあたります。
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

            <Card className="p-8 mb-12 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg mb-3">このような症状はありませんか？</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{symptom}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    これらの症状がある場合は、早めの受診をお勧めします。
                  </p>
                </div>
              </div>
            </Card>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                主な対象疾患
              </h3>
              <div className="space-y-6">
                {diseases.map((category, index) => (
                  <Card key={index} className="p-6">
                    <h4 className="font-semibold text-primary mb-3">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                主な検査項目
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {examinations.map((exam, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {exam.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {exam.description}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {exam.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                内視鏡検査実績
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                当院では開院以来、豊富な内視鏡検査実績を誇ります
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">胃カメラ</h4>
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">15,191件</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2003年〜2024年累計</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="text-xl font-semibold">大腸カメラ</h4>
                  </div>
                  <p className="text-4xl font-bold text-accent mb-2">7,606件</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2003年〜2024年累計</p>
                </div>
              </div>
              <div className="text-center">
                <Button asChild variant="default">
                  <Link href="/endoscopy" className="flex items-center gap-2 mx-auto">
                    詳しい検査実績を見る
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="bg-primary-50 dark:bg-primary-900 p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                ピロリ菌検査・除菌治療
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                ピロリ菌は胃がんや胃潰瘍の主要な原因となる細菌です。
                当院では、各種検査によりピロリ菌感染の有無を診断し、除菌治療を行っています。
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>呼気試験による正確な診断</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>保険適用での除菌治療</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>除菌成功率95%以上</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/endoscopy">内視鏡検査の詳細</Link>
              </Button>
            </Card>

            <Card className="p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                肝臓専門外来
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                日本肝臓学会専門医による専門的な診療を行っています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">脂肪肝外来</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    生活習慣の改善指導と薬物療法
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">肝炎外来</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    B型・C型肝炎の検査と治療
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">肝機能異常</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    健診で指摘された肝機能異常の精査
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">肝硬変管理</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    定期的な検査と合併症予防
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                診療時間
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>午前：9:00～12:30（受付12:00まで）</p>
                <p>午後：15:00～18:00（受付17:30まで）</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  ※日曜・祝日・その他休診
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="tel:048-222-0700" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    電話で予約・相談
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/endoscopy">内視鏡センター</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}