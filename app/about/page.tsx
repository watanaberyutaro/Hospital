import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Users, Heart, Award, Building, Calendar, MapPin } from 'lucide-react'
import { FutureUpdate } from '@/components/ui/FutureUpdate'

export default function AboutPage() {
  const stats = [
    { number: '2001年', label: '設立', icon: Calendar },
    { number: '3名', label: '医師', icon: Users },
    { number: '2科', label: '診療科目', icon: Building },
    { number: '11台', label: '駐車場', icon: MapPin },
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
                新井町内科消化器科クリニックは、2001年の開院以来、地域の皆様の健康を守るかかりつけ医として診療を行ってまいりました。
                「患者様一人ひとりに寄り添い、分かりやすい説明と丁寧な診療」をモットーに、内科・消化器内科の専門医が診療を提供しています。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                特に内視鏡センターでは、上下部内視鏡検査（胃・大腸カメラ）を中心に、苦痛の少ない検査を心がけております。
                採血、処方、総合健診、人間ドック（局所的）など、地域の皆様の健康管理をサポートします。
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/建物2.jpg" 
                  alt="新井町内科消化器クリニック施設"
                  className="w-full h-auto object-cover"
                />
              </div>
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
            title="施設紹介"
            subtitle="充実した医療設備"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/オペ.jpg" 
                alt="手術室"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">手術室</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">最新の設備を備えた清潔な手術室</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/内視鏡センター.jpg" 
                alt="内視鏡センター"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">内視鏡センター</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">最新の内視鏡システムを完備</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/art.jpg" 
                alt="院内アート"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">癒しの空間</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">患者様がリラックスできる環境</p>
              </div>
            </div>
          </div>
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
                  <span className="text-gray-600 dark:text-gray-300">医院名</span>
                  <span className="text-gray-900 dark:text-white">新井町内科消化器科クリニック</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">設立</span>
                  <span className="text-gray-900 dark:text-white">2001年</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">経営形態</span>
                  <span className="text-gray-900 dark:text-white">個人経営</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">診療科</span>
                  <span className="text-gray-900 dark:text-white">一般内科・消化器内科</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">電話番号</span>
                  <span className="text-gray-900 dark:text-white">048-222-0700</span>
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
                    〒333-0849<br />
                    埼玉県川口市新井町16-1
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">メール</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    araityounaikasyoukaki25@gmail.com
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">お車でお越しの方</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    駐車場完備<br />
                    軽自動車1台、普通車10台
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