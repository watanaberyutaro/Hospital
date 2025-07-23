'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FutureUpdate } from '@/components/ui/FutureUpdate'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car,
  Train,
  Calendar,
  MessageSquare
} from 'lucide-react'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: '電話でのお問い合わせ',
      description: '一般的なお問い合わせや診療予約',
      details: 'TEL: 048-222-0700',
      hours: '診療時間内',
    },
    {
      icon: Mail,
      title: 'メールでのお問い合わせ',
      description: 'ご質問やご相談はメールでも受け付けています',
      details: 'araityounaikasyoukaki25@gmail.com',
      hours: '24時間受付（返信は平日のみ）',
    },
    {
      icon: MessageSquare,
      title: '窓口でのお問い合わせ',
      description: '直接窓口でご相談いただけます',
      details: '1階総合受付',
      hours: '診療時間内',
    },
    {
      icon: Calendar,
      title: '診療予約について',
      description: '現在予約外診療のみ(内視鏡検査を除く)',
      details: '今後電子カルテ導入で予約可能予定',
      hours: 'オンライン診療は今後検討中',
    },
  ]

  const accessMethods = [
    {
      icon: Train,
      title: '電車でお越しの方',
      description: '埼玉高速鉄道 川口元郷駅',
      details: '1番出口より徒歩10分',
    },
    {
      icon: Car,
      title: 'お車でお越しの方',
      description: '患者様専用駐車場完備',
      details: '軽自動車1台、普通車10台',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'お問い合わせ' }]} />
          <SectionHeading 
            title="お問い合わせ"
            subtitle="ご質問やご相談がございましたら、お気軽にお問い合わせください"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {method.description}
                    </p>
                    <div className="text-primary font-medium mb-1">
                      {method.details}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {method.hours}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                お問い合わせフォーム
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    お問い合わせ内容 *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white">
                    <option value="">選択してください</option>
                    <option value="appointment">診療予約</option>
                    <option value="inquiry">一般的なお問い合わせ</option>
                    <option value="consultation">医療相談</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    メッセージ *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                    placeholder="お問い合わせの詳細をご記入ください"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = 'mailto:araityounaikasyoukaki25@gmail.com?subject=お問い合わせ&body=お問い合わせ内容をこちらに記載してください'
                  }}
                >
                  送信する
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  クリニック情報
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">住所</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        〒333-0849<br />
                        埼玉県川口市新井町16-1
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">電話番号</p>
                      <p className="text-gray-600 dark:text-gray-300">TEL: 048-222-0700</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">メールアドレス</p>
                      <p className="text-gray-600 dark:text-gray-300">araityounaikasyoukaki25@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">受付時間</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        診療時間: 9:00-12:30(最終受付)<br />
                        15:00-18:00(最終受付17:30)<br />
                        休診日: 日曜・祝日・その他
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  アクセス
                </h3>
                <div className="space-y-4">
                  {accessMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <method.icon className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {method.title}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {method.description}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {method.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}