import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { GraduationCap, Stethoscope, Award, Users } from 'lucide-react'
import { FutureUpdate } from '@/components/ui/FutureUpdate'

export default function DoctorsPage() {
  const doctors = [
    {
      name: '植村 博之',
      kana: 'うえむら ひろゆき',
      title: '院長',
      qualifications: ['医学博士'],
      specialties: ['内科全般', '消化器内科'],
      description: <><FutureUpdate message="経歴は現在更新中です" /></>,
    },
    {
      name: '植村 隼人',
      kana: 'うえむら はやと',
      title: '副院長',
      qualifications: [
        '医学博士',
        '肝臓内科専門医',
        '内視鏡専門医',
        '内科認定医',
        '消化器病専門医'
      ],
      specialties: ['消化器内科', '肝臓内科', '内視鏡検査'],
      description: '内視鏡検査を中心に、消化器疾患の診断・治療を専門としています。',
    },
    {
      name: '植村 伶央',
      kana: 'うえむら れお',
      title: '医師',
      qualifications: [],
      specialties: ['内科全般'],
      description: '地域の皆様の健康を守るため、丁寧な診療を心がけています。',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: '医師紹介' }]} />
          <SectionHeading 
            title="医師紹介"
            subtitle="専門医資格を持つ医師が診療を担当します"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Stethoscope className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{doctor.kana}</p>
                    <p className="text-lg text-primary font-semibold mt-2">{doctor.title}</p>
                  </div>

                  {doctor.qualifications.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">資格</h4>
                      </div>
                      <ul className="space-y-1">
                        {doctor.qualifications.map((qual, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 pl-7">
                            • {qual}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">専門分野</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {doctor.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-secondary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  看護スタッフ募集中
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  新井町内科消化器科クリニックでは、看護師を若干名募集しています。
                  地域医療に貢献したい方、ぜひお問い合わせください。
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  ※詳細な募集要項については、お電話にてお問い合わせください。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}