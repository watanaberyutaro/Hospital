import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '大腸内視鏡検査・院内規定 | 新井町内科消化器クリニック',
  description: '新井町内科消化器クリニックの大腸内視鏡検査における院内規定についてご案内します。',
}

export default function ColonoscopyGuidelinePage() {
  const conditions = [
    '年齢：80歳以上',
    'ワーファリン内服中、あるいは抗凝固薬内服中の場合',
    '心血管疾患保有者（冠動脈ステント留置後、バイパス術後、大動脈瘤術後、人工透析 など）',
    '妊婦',
    'インシュリン注射の治療を行っている重度の糖尿病の方',
  ]

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/endoscopy">
              <Button variant="ghost" className="mb-6 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                内視鏡センターに戻る
              </Button>
            </Link>
            <SectionHeading
              title="大腸内視鏡検査・院内規定"
              subtitle=""
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-foreground">
                      以下の場合は当院での大腸内視鏡検査は困難です
                    </h2>
                    <ul className="space-y-3">
                      {conditions.map((condition, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                          <span className="text-muted-foreground leading-relaxed">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    上記の場合は、安全性を考慮し、入院可能な病院での検査をお勧めしております。
                  </p>
                  <p className="leading-relaxed">
                    患者様の安全を第一に考えた対応となりますので、ご理解とご協力をお願いいたします。
                  </p>
                </div>

                <div className="pt-8 border-t">
                  <div className="text-right space-y-2">
                    <p className="text-foreground font-medium">新井町内科消化器クリニック</p>
                    <p className="text-foreground">院長　植村 博之</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link href="/endoscopy">
                    <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      内視鏡センターに戻る
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
