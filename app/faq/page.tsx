'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { ChevronDown, ChevronUp, HelpCircle, CreditCard, Clock, Calendar, Stethoscope, FileText } from 'lucide-react'

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: '保険・費用について',
      icon: CreditCard,
      items: [
        {
          question: '保険は効きますか？',
          answer: `はい、当院は保険医療機関です。健康保険証をお持ちいただければ、保険診療を受けることができます。
          
          【保険適用となる診療】
          • 一般的な内科診療
          • 消化器内科診療
          • 内視鏡検査（医師が必要と判断した場合）
          • 各種血液検査
          • 処方箋の発行
          
          【保険適用外となるもの】
          • 健康診断（会社指定のものを除く）
          • 予防接種の一部
          • 診断書・証明書の発行
          • 美容目的の治療`
        },
        {
          question: '初診料はいくらくらいかかりますか？',
          answer: `3割負担の場合、初診料は約1,000円前後です。これに検査や処置、お薬代が加わります。
          症状や必要な検査により総額は変わりますが、一般的な風邪の診察で2,000～3,000円程度です。`
        },
        {
          question: 'クレジットカードは使えますか？',
          answer: '申し訳ございませんが、現在のところ現金のみの取り扱いとなっております。'
        }
      ]
    },
    {
      title: '受診について',
      icon: Stethoscope,
      items: [
        {
          question: '予約は必要ですか？',
          answer: `予約制ではありません。受付順にて診察いたします。
          
          お問い合わせ: 048-222-0700`
        },
        {
          question: '初診の際に必要なものは？',
          answer: `【必ずお持ちください】
          • 健康保険証
          • お薬手帳（お持ちの方）
          
          【あればお持ちください】
          • 紹介状
          • 検査結果
          • 医療証（お持ちの方）`
        },
        {
          question: '症状がなくても健診で異常を指摘されたら受診すべきですか？',
          answer: `はい、ぜひ受診してください。健診で「要再検査」「要精密検査」と指摘された場合、
          自覚症状がなくても病気が隠れている可能性があります。
          特に肝機能異常（ASTやALT）、胸部X線での影、血糖値異常などは早期治療が重要です。`
        },
        {
          question: '急な症状でもすぐに診てもらえますか？',
          answer: '急な不整脈、胸痛、激しい腹痛など緊急性の高い症状の場合は、優先的に診察いたします。受付でお申し出ください。'
        }
      ]
    },
    {
      title: '検査について',
      icon: FileText,
      items: [
        {
          question: '内視鏡検査は痛くないですか？',
          answer: `当院では鎮静剤を使用した苦痛の少ない内視鏡検査を行っています。
          ご希望により鎮静剤を使用することで、ほとんど苦痛なく検査を受けることができます。
          
          【GF・CF担当医】
          当院の医師が全ての内視鏡検査を担当します。
          日本消化器内視鏡学会専門医の資格を持ち、安全で正確な検査を心がけています。`
        },
        {
          question: '検査結果はいつ分かりますか？',
          answer: `• 血液検査: 3～7日後
          • 尿検査: 当日
          • 心電図: 当日
          • レントゲン: 当日
          • 内視鏡検査: 検査直後に説明
          • 病理検査: 三週間後`
        },
        {
          question: 'CT検査はできますか？',
          answer: '当院ではCT検査は行っておりませんが、近隣の提携医療機関と連携して実施可能です。必要な場合は速やかに手配いたします。'
        },
        {
          question: 'コロナ抗体検査はやっていますか？',
          answer: '実施してます。'
        }
      ]
    },
    {
      title: '診療時間・アクセス',
      icon: Clock,
      items: [
        {
          question: '診療時間を教えてください',
          answer: `【診療時間】
          月・火・水・金: 9:00-12:30 / 15:00-17:30
          木・土: 9:00-12:30（午後休診）
          日・祝: 休診
          
          ※受付は診療終了の30分前までです。`
        },
        {
          question: '最寄り駅からの行き方は？',
          answer: `【川口元郷駅から】
          • 川口元郷駅より徒歩13分もしくはバス約2分
          • （元郷一丁目下車徒歩3分。新井町交差点角）
          
          【川口駅東口から】
          • 【のりば1】川０２・川０２－２
          • 【のりば2】川１５・川１５－３
          • 【のりば3】川０４・川１４－２・川１６
          • 「元郷一丁目」下車徒歩3分
          • （元郷一丁目下車徒歩3分。新井町交差点角）`
        },
        {
          question: '駐車料金はかかりますか？',
          answer: `駐車場の料金負担はしていないため、当院駐車場をお使いください。
          空いてない際はお手数ですが近隣駐車場をご使用ください。`
        }
      ]
    },
    {
      title: 'その他',
      icon: HelpCircle,
      items: [
        {
          question: '医療DXとは何ですか？',
          answer: `医療DXは、デジタル技術を活用して医療サービスを向上させる取り組みです。
          
          当院では以下を導入しています：
          • オンライン資格確認: 保険証の確認が迅速に
          • 電子処方箋: お薬の管理が便利に
          • カルテ情報共有: 他医療機関との連携がスムーズに
          
          これにより、待ち時間の短縮や、より安全な医療の提供が可能になります。`
        },
        {
          question: '40歳になったら何か検査を受けた方がいいですか？',
          answer: `40歳以上の方には、年1回の健康診断を強くお勧めします。
          特に以下の検査が重要です：
          
          • 特定健診（メタボ健診）
          • がん検診（胃・大腸・肺）
          • 内視鏡検査
          
          川口市在住の方は、市の健診制度を利用できます。`
        },
        {
          question: 'セカンドオピニオンは受けられますか？',
          answer: 'はい、セカンドオピニオンも承っております。他院での診断や治療方針について、ご相談ください。診療情報提供書をお持ちいただけるとスムーズです。'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="よくあるご質問"
            subtitle="患者様からよくいただくご質問にお答えします"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary-100 dark:bg-primary-800 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex
                    const isOpen = openItems.includes(globalIndex)
                    
                    return (
                      <Card key={itemIndex} className="overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="flex items-start gap-3 flex-1">
                            <span className="text-primary font-bold text-lg">Q.</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {item.question}
                            </span>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="flex items-start gap-3">
                              <span className="text-primary font-bold text-lg">A.</span>
                              <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}

            <Card className="p-8 bg-primary-50 dark:bg-primary-900/20">
              <h3 className="text-xl font-bold mb-4">その他のご質問</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                こちらに掲載されていないご質問がございましたら、
                お電話でお気軽にご連絡ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:048-222-0700"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center"
                >
                  電話で問い合わせる
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}