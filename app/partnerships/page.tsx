import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Building2, Users, ArrowRight, Hospital, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function PartnershipsPage() {
  const partnerHospitals = [
    {
      name: '川口工業総合病院',
      type: '総合病院',
      specialties: ['救急医療', '外科手術', '高度医療'],
      description: '24時間365日の救急対応が可能な地域の中核病院です。',
    },
    {
      name: '川口市立医療センター',
      type: '公立病院',
      specialties: ['総合診療', '専門医療', '検査設備'],
      description: '最新の医療設備を備えた市立の総合医療センターです。',
    },
    {
      name: '済生会川口総合病院',
      type: '総合病院',
      specialties: ['内科系診療', '外科系診療', '健診センター'],
      description: '幅広い診療科を持つ総合病院として地域医療に貢献しています。',
    },
    {
      name: '帝京大学医学部附属病院',
      type: '大学病院',
      specialties: ['高度専門医療', '先進医療', '医学研究'],
      description: '大学病院として最先端の医療と研究を提供しています。',
    },
  ]

  const referralProcess = [
    {
      step: '1',
      title: '診察・相談',
      description: '当院で診察を受け、専門的な検査や治療が必要と判断された場合',
      icon: Users,
    },
    {
      step: '2',
      title: '紹介状作成',
      description: '患者様の症状や検査結果を詳しく記載した紹介状を作成します',
      icon: Building2,
    },
    {
      step: '3',
      title: '予約手配',
      description: '連携病院への予約を当院で手配し、スムーズな受診をサポートします',
      icon: Hospital,
    },
    {
      step: '4',
      title: '経過フォロー',
      description: '連携病院での治療後も、当院で継続的なフォローアップを行います',
      icon: ArrowRight,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: '医療連携' }]} />
          <SectionHeading 
            title="医療連携・紹介状"
            subtitle="地域の医療機関と連携し、最適な医療を提供します"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              連携医療機関
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              当院は以下の医療機関と密接に連携し、患者様の症状に応じて適切な紹介を行っています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerHospitals.map((hospital, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {hospital.name}
                      </h3>
                      <p className="text-sm text-primary mb-3">{hospital.type}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {hospital.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">
                ※その他にも症状や必要に応じて、適切な医療機関をご紹介いたします。
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              紹介受診の手順
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {referralProcess.map((process, index) => (
                <Card key={index} className="p-6 text-center relative">
                  {index < referralProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {process.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-primary/5">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              紹介状について
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  紹介状の必要性
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  専門的な検査や入院治療が必要な場合、当院から適切な医療機関へ紹介状を作成いたします。
                  紹介状には、これまでの診療経過、検査結果、処方内容などを詳しく記載し、
                  連携先の医療機関でスムーズに診療を受けていただけるようにいたします。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  費用について
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  紹介状の作成には、診療情報提供料（保険適用）がかかります。
                  詳しくは受付でお尋ねください。
                </p>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <a href="tel:048-222-0700" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    紹介状についてお電話でご相談
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}