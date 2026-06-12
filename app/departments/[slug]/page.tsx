import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Clock, Users, Calendar } from 'lucide-react'

// This would normally come from MDX files or a CMS
const getDepartmentData = async (slug: string) => {
  const departments: { [key: string]: any } = {
    'surgery': {
      title: '外科',
      description: '一般外科から専門的な手術まで、幅広く対応しています。',
      content: `
        <h2>外科について</h2>
        <p>当院の外科では、最新の医療技術を用いて、患者様の負担を最小限に抑えた治療を心がけています。</p>
        
        <h3>主な診療内容</h3>
        <ul>
          <li>消化器外科（胃がん、大腸がんの手術）</li>
          <li>乳腺外科（乳がんの診断・治療）</li>
          <li>内視鏡外科（腹腔鏡下手術）</li>
          <li>一般外科（皮膚・皮下腫瘍、外傷）</li>
        </ul>
      `,
      doctors: [
        { name: '山田 一郎', title: '外科部長', specialties: ['消化器外科', '乳腺外科'] },
        { name: '鈴木 美咲', title: '外科医師', specialties: ['一般外科', '内視鏡外科'] },
      ],
      schedule: [
        { day: '月曜日', morning: '9:00-12:00', afternoon: '14:00-17:00' },
        { day: '火曜日', morning: '9:00-12:00', afternoon: '14:00-17:00' },
        { day: '水曜日', morning: '9:00-12:00', afternoon: '14:00-17:00' },
        { day: '木曜日', morning: '9:00-12:00', afternoon: '休診' },
        { day: '金曜日', morning: '9:00-12:00', afternoon: '14:00-17:00' },
        { day: '土曜日', morning: '9:00-12:00', afternoon: '休診' },
        { day: '日曜日', morning: '休診', afternoon: '休診' },
      ],
    },
  }

  return departments[slug] || null
}

export default async function DepartmentPage({ params }: { params: { slug: string } }) {
  const department = await getDepartmentData(params.slug)

  if (!department) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: '診療科', href: '/departments' },
            { label: department.title }
          ]} />
          <SectionHeading 
            title={department.title}
            subtitle={department.description}
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8 mb-8">
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: department.content }}
                />
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  担当医師
                </h3>
                <div className="space-y-4">
                  {department.doctors.map((doctor: any, index: number) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {doctor.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {doctor.title}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {doctor.specialties.map((specialty: string, i: number) => (
                          <span
                            key={i}
                            className="bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200 px-2 py-1 rounded text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  診療時間
                </h3>
                <div className="space-y-2">
                  {department.schedule.map((schedule: any, index: number) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {schedule.day}
                      </span>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <div>{schedule.morning}</div>
                        <div>{schedule.afternoon}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  予約について
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  初診の方は予約なしでも受診いただけますが、予約をお取りいただくとスムーズに診療を受けられます。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-16">電話:</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">03-1234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-16">時間:</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">平日 9:00-17:00</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { slug: 'surgery' },
    { slug: 'pediatrics' },
    { slug: 'orthopedics' },
    { slug: 'obstetrics-gynecology' },
    { slug: 'ophthalmology' },
    { slug: 'otolaryngology' },
    { slug: 'neurology' },
    { slug: 'dermatology' },
    { slug: 'urology' },
    { slug: 'psychiatry' },
    { slug: 'anesthesiology' },
  ]
}