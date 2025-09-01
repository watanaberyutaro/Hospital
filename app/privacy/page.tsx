import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. 個人情報の取得',
      content: `当院は、診療及び医療サービスの提供に必要な範囲で、患者様の個人情報を取得いたします。
      取得する情報には、氏名、住所、電話番号、生年月日、保険情報、診療記録等が含まれます。`
    },
    {
      title: '2. 個人情報の利用目的',
      content: `取得した個人情報は、以下の目的で利用いたします：
      • 診療及び健康管理
      • 医療保険事務
      • 入退院等の病棟管理
      • 会計・経理
      • 医療事故等の報告
      • 医療サービスの向上
      • 医療実習への協力
      • 医療の質の向上を目的とした症例研究`
    },
    {
      title: '3. 個人情報の第三者提供',
      content: `当院は、以下の場合を除き、患者様の個人情報を第三者に提供いたしません：
      • 患者様の同意がある場合
      • 法令に基づく場合
      • 人の生命、身体又は財産の保護のために必要がある場合
      • 公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合`
    },
    {
      title: '4. 個人情報の管理',
      content: `当院は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
      また、個人情報を正確かつ最新の状態に保つよう努めます。`
    },
    {
      title: '5. 開示・訂正・利用停止',
      content: `患者様は、ご自身の個人情報について、開示、訂正、利用停止等を請求することができます。
      請求される場合は、受付窓口までお申し出ください。`
    },
    {
      title: '6. 医療DX対応',
      content: `当院は医療DXを推進しており、以下の取り組みを行っています：
      • オンライン資格確認の導入
      • 電子処方箋の発行
      • カルテ情報共有サービスの利用
      • 医療DX推進体制整備加算の算定
      
      これらのシステムを通じて取得・管理される情報についても、本プライバシーポリシーに基づき適切に取り扱います。`
    },
    {
      title: '7. お問い合わせ',
      content: `個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
      
      新井町内科消化器クリニック
      個人情報保護管理者
      TEL: 048-222-0700
      受付時間: 平日 9:00-17:30`
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="プライバシーポリシー"
            subtitle="個人情報保護方針"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-800 rounded-lg">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">個人情報保護方針</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    新井町内科消化器クリニック（以下「当院」）は、患者様の個人情報を適切に保護することが
                    医療機関としての重要な責務であると認識し、以下の方針に基づき個人情報の保護に努めます。
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="border-b pb-6 last:border-0">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {section.title}
                    </h3>
                    <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  制定日: 2001年4月1日<br />
                  最終改定日: 2024年4月1日<br />
                  <br />
                  新井町内科消化器クリニック<br />
                  院長 植村 博之
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}