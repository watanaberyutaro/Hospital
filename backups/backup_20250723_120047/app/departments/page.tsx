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
      name: '内科',
      description: '生活習慣病から急性疾患まで、幅広い内科疾患に対応します。',
      icon: Stethoscope,
      doctors: 2,
      services: ['高血圧', '糖尿病', '心電図検査', '胃内視鏡検査'],
    },
    {
      slug: 'surgery',
      name: '外科',
      description: '一般外科から専門的な手術まで、最新技術で治療します。',
      icon: Activity,
      doctors: 2,
      services: ['消化器外科', '乳腺外科', '腹腔鏡手術', '救急外科'],
    },
    {
      slug: 'pediatrics',
      name: '小児科',
      description: '新生児から思春期まで、お子様の健康を守ります。',
      icon: Baby,
      doctors: 1,
      services: ['小児一般', '予防接種', '乳幼児健診', '発達相談'],
    },
    {
      slug: 'orthopedics',
      name: '整形外科',
      description: '骨折、関節疾患、スポーツ外傷などに対応します。',
      icon: Bone,
      doctors: 2,
      services: ['骨折治療', '関節疾患', 'スポーツ外傷', 'リハビリテーション'],
    },
    {
      slug: 'obstetrics-gynecology',
      name: '産婦人科',
      description: '妊娠・出産から婦人科疾患まで、女性の健康をサポート。',
      icon: Heart,
      doctors: 1,
      services: ['妊婦健診', '分娩', '婦人科検診', '更年期相談'],
    },
    {
      slug: 'ophthalmology',
      name: '眼科',
      description: '目の病気から視力検査まで、眼の健康を守ります。',
      icon: Eye,
      doctors: 1,
      services: ['白内障', '緑内障', '網膜疾患', '視力検査'],
    },
    {
      slug: 'otolaryngology',
      name: '耳鼻咽喉科',
      description: '耳・鼻・のどの疾患を専門的に診療します。',
      icon: Ear,
      doctors: 1,
      services: ['中耳炎', '副鼻腔炎', '扁桃炎', '聴力検査'],
    },
    {
      slug: 'neurology',
      name: '神経内科',
      description: '脳神経疾患の診断・治療を行います。',
      icon: Brain,
      doctors: 1,
      services: ['脳梗塞', 'パーキンソン病', '認知症', '頭痛外来'],
    },
    {
      slug: 'dermatology',
      name: '皮膚科',
      description: '皮膚疾患全般を診療します。',
      icon: Users,
      doctors: 1,
      services: ['アトピー性皮膚炎', '湿疹', '皮膚腫瘍', '美容皮膚科'],
    },
    {
      slug: 'urology',
      name: '泌尿器科',
      description: '腎臓・膀胱・前立腺の疾患に対応します。',
      icon: Microscope,
      doctors: 1,
      services: ['前立腺疾患', '尿路感染症', '腎結石', '尿失禁'],
    },
    {
      slug: 'psychiatry',
      name: '精神科',
      description: 'こころの病気の診断・治療を行います。',
      icon: Pill,
      doctors: 1,
      services: ['うつ病', '不安障害', '統合失調症', 'カウンセリング'],
    },
    {
      slug: 'anesthesiology',
      name: '麻酔科',
      description: '手術時の麻酔管理とペインクリニックを行います。',
      icon: Zap,
      doctors: 1,
      services: ['手術麻酔', 'ペインクリニック', '慢性疼痛', '神経ブロック'],
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