import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { 
  Heart, 
  Stethoscope, 
  Baby, 
  Bone, 
  Eye, 
  Ear, 
  Brain, 
  Activity,
  Users,
  Microscope,
  Pill,
  Zap
} from 'lucide-react'

export default function DepartmentsPage() {
  const departments = [
    {
      slug: 'internal-medicine',
      name: '一般内科',
      description: '生活習慣病から急性疾患まで、幅広い内科疾患に対応します。',
      icon: Stethoscope,
      doctors: 3,
      services: ['かぜ・発熱', '生活習慣病', '健康診断', '予防接種'],
    },
    {
      slug: 'gastroenterology',
      name: '消化器内科',
      description: '胃腸・肝臓・胆のう・膵臓の病気を専門的に診断・治療します。',
      icon: Activity,
      doctors: 3,
      services: ['胃痛・腹痛', '便通異常', '肝機能検査', 'ピロリ菌検査'],
    },
    {
      slug: 'endoscopy',
      name: '内視鏡センター',
      description: '苦痛の少ない上下部内視鏡検査（胃・大腸カメラ）を行います。',
      icon: Microscope,
      doctors: 3,
      services: ['胃カメラ検査', '大腸カメラ検査', 'ポリープ切除', '鎮静下検査'],
    },
    {
      slug: 'health-checkup',
      name: '総合健診',
      description: '人間ドック（局所的）・各種健康診断に対応しています。',
      icon: Heart,
      doctors: 3,
      services: ['特定健診', '企業健診', '各種検診', '人間ドック'],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: '診療科' }]} />
          <SectionHeading 
            title="診療科のご案内"
            subtitle="専門医による質の高い医療を提供します"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <Card key={dept.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center mr-4">
                      <dept.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {dept.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        医師 {dept.doctors}名
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {dept.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      主な診療内容
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href={`/departments/${dept.slug}`}>
                      詳細を見る
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}