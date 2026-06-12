import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Users, Heart, Award, Building, Calendar, MapPin } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: '30年', label: '開院からの歴史', icon: Calendar },
    { number: '150名', label: '医療従事者', icon: Users },
    { number: '15科', label: '診療科目', icon: Building },
    { number: '200床', label: '病床数', icon: MapPin },
  ]

  const features = [
    {
      icon: Heart,
      title: '患者様中心の医療',
      description: '患者様とご家族の気持ちに寄り添い、一人ひとりに最適な医療を提供します。',
    },
    {
      icon: Award,
      title: '高品質な医療',
      description: '最新の医療技術と設備を導入し、質の高い医療サービスを提供します。',
    },
    {
      icon: Users,
      title: 'チーム医療',
      description: '多職種が連携し、包括的で継続的な医療ケアを実現します。',
    },
    {
      icon: Building,
      title: '地域医療',
      description: '地域の医療機関と連携し、地域全体の健康を支えます。',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: '病院概要' }]} />
          <SectionHeading 
            title="病院概要"
            subtitle="地域の皆様に信頼される医療を提供します"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                私たちの使命
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                地域医療センター病院は、1994年の開院以来、地域の皆様の健康と生命を守る使命を果たしてまいりました。
                「患者様一人ひとりを大切に」を理念として、質の高い医療を提供し続けています。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                最新の医療技術と温かい人間性を兼ね備えた医療チームが、24時間365日体制で患者様の健康をサポートします。
                地域の中核病院として、救急医療から専門医療まで幅広く対応し、皆様の信頼にお応えします。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="私たちの特徴"
            subtitle="患者様に選ばれる理由"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="病院情報"
            subtitle="基本情報とアクセス"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                基本情報
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">病院名</span>
                  <span className="text-gray-900 dark:text-white">地域医療センター病院</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">開院</span>
                  <span className="text-gray-900 dark:text-white">1994年4月</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">病床数</span>
                  <span className="text-gray-900 dark:text-white">200床</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">診療科</span>
                  <span className="text-gray-900 dark:text-white">15科</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">職員数</span>
                  <span className="text-gray-900 dark:text-white">約150名</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                アクセス
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">住所</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    〒106-0032<br />
                    東京都港区六本木1-2-3<br />
                    メディカルビル5階
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">電車でお越しの方</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    東京メトロ日比谷線・都営大江戸線<br />
                    六本木駅より徒歩3分
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">お車でお越しの方</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    駐車場完備（30台）<br />
                    ※診察券提示で2時間無料
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}