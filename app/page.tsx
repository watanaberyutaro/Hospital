'use client'

import { Hero } from '@/components/ui/Hero'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Calendar, Clock, MapPin, Phone, Thermometer, Stethoscope, Heart, AlertCircle } from 'lucide-react'
import NewsSection from '@/components/NewsSection'
import { ClinicCalendar } from '@/components/ui/ClinicCalendar'
import { useState, useEffect, useMemo } from 'react'
import { getMonthlyHolidays, type Holiday } from '@/src/lib/holidays'

interface SpecialHoliday {
  id: string
  date: string
  reason: string
  createdAt: string
}

interface HolidaysData {
  regularHolidays: {
    weekdays: number[]
    description: string
  }
  halfDayHolidays?: {
    weekdays: number[]
    description: string
  }
  specialHolidays: SpecialHoliday[]
}

export default function HomePage() {
  const [holidays, setHolidays] = useState<HolidaysData>({
    regularHolidays: { weekdays: [0], description: "毎週日曜日" },
    halfDayHolidays: { weekdays: [3, 4, 6], description: "毎週水曜日・木曜日・土曜日" },
    specialHolidays: []
  })
  const [nationalHolidays, setNationalHolidays] = useState<Holiday[]>([])
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(() => {
    fetch('/api/holidays')
      .then(res => res.json())
      .then(data => setHolidays(data))
      .catch(err => console.error('Failed to fetch holidays:', err))
    
    // 祝日データを取得
    const holidays = getMonthlyHolidays(currentDate.getFullYear(), currentDate.getMonth() + 1)
    setNationalHolidays(holidays)
  }, [currentDate])

  // 毎日0時に日付を更新
  useEffect(() => {
    const checkDateChange = () => {
      const now = new Date()
      const today = new Date(currentDate)
      
      // 日付が変わったかチェック
      if (now.toDateString() !== today.toDateString()) {
        setCurrentDate(now)
      }
    }

    // 初回チェック
    checkDateChange()

    // 1分ごとにチェック（0時を逃さないため）
    const interval = setInterval(checkDateChange, 60000)

    // ページがフォーカスされた時にもチェック
    const handleFocus = () => checkDateChange()
    window.addEventListener('focus', handleFocus)

    return () => {
      clearInterval(interval)
      window.removeEventListener('focus', handleFocus)
    }
  }, [currentDate])
  const medicalServices = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: '内科診療',
      description: '川口市ですぐに対応可能。かぜ、発熱、頭痛、生活習慣病など日常的な健康問題にすぐに対応。地域の「かかりつけ医」として親身に診療いたします。',
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: '発熱外来',
      description: 'インフルエンザ、新型コロナウイルス、溶連菌の検査ができます。安心して受診できる体制を整えています。',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '胃カメラ検査',
      description: '川口市の消化器内科専門医による苦痛の少ない内視鏡検査。鎮静剤使用も可能で、異常の早期発見・早期治療に努めます。',
    },
  ]

  const scheduleInfo = {
    regular: [
      { day: '月・火・水・金', morning: '午前の部 9:00～12:30', afternoon: '午後の部 15:00～18:00' },
      { day: '木・土', morning: '午前の部 9:00～12:30', afternoon: '午後休診' },
    ],
    holidays: '日曜日・祝日',
    note: '終了30分前までの受付をお願いいたします。',
  }

  // カレンダー用のデータ生成
  const calendarData = useMemo(() => {
    const todayDate = new Date(currentDate)
    const year = todayDate.getFullYear()
    const month = todayDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    // 月曜日始まりに調整（getDay()が0（日曜）の場合は6、それ以外は-1）
    const firstDayOfWeek = firstDay.getDay()
    const daysToSubtract = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
    startDate.setDate(startDate.getDate() - daysToSubtract)
    
    const weeks = []
    let week = []
    let iterDate = new Date(startDate)
    let safeguard = 0 // 無限ループ防止
    
    while (iterDate <= lastDay || week.length > 0) {
      if (safeguard++ > 42) break // カレンダーの最大マス数（6週間）を超えたら終了
      
      if (week.length === 7) {
        weeks.push(week)
        week = []
        if (iterDate > lastDay && week.length === 0) break
      }
      
      if (iterDate.getMonth() === month) {
        const dayOfWeek = iterDate.getDay()
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(iterDate.getDate()).padStart(2, '0')}`
        
        // 定休日チェック
        const isRegularHoliday = holidays.regularHolidays.weekdays.includes(dayOfWeek)
        
        // 午後休みチェック
        const isHalfDayHoliday = holidays.halfDayHolidays?.weekdays.includes(dayOfWeek) || false
        
        // 臨時休業日チェック
        const isSpecialHoliday = holidays.specialHolidays.some(h => h.date === dateString)
        const specialHolidayReason = holidays.specialHolidays.find(h => h.date === dateString)?.reason
        
        // 祝日チェック
        const nationalHoliday = nationalHolidays.find(h => h.date === dateString)
        const isNationalHoliday = !!nationalHoliday
        const nationalHolidayName = nationalHoliday?.name
        
        const isToday = iterDate.toDateString() === todayDate.toDateString()
        
        week.push({
          date: iterDate.getDate(),
          dateString,
          isCurrentMonth: true,
          isHoliday: isRegularHoliday || isSpecialHoliday || isNationalHoliday,
          isHalfDayHoliday,
          isSpecialHoliday,
          specialHolidayReason,
          isNationalHoliday,
          nationalHolidayName,
          isToday,
          dayOfWeek,
        })
      } else if (iterDate > lastDay && week.length > 0) {
        // 最終週の空きマスを埋める
        week.push({
          date: '',
          dateString: '',
          isCurrentMonth: false,
          isHoliday: false,
          isSpecialHoliday: false,
          specialHolidayReason: '',
          isToday: false,
          dayOfWeek: iterDate.getDay(),
        })
      }
      
      iterDate.setDate(iterDate.getDate() + 1)
    }
    
    if (week.length > 0 && week.length < 7) {
      // 最終週が7日未満の場合、空きマスで埋める
      while (week.length < 7) {
        week.push({
          date: '',
          dateString: '',
          isCurrentMonth: false,
          isHoliday: false,
          isSpecialHoliday: false,
          specialHolidayReason: '',
          isToday: false,
          dayOfWeek: week.length,
        })
      }
      weeks.push(week)
    }
    
    return {
      year,
      month,
      weeks,
      monthName: new Date(year, month).toLocaleDateString('ja-JP', { month: 'long' }),
    }
  }, [currentDate, holidays, nationalHolidays])
  const weekDays = ['月', '火', '水', '木', '金', '土', '日']


  const quickAccess = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'お電話はこちら',
      description: 'お電話でご相談ください',
      href: 'tel:048-222-0700',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '診療時間',
      description: '9:00-12:30 / 15:00-18:00',
      href: '/schedule',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'アクセス',
      description: '埼玉県川口市新井町16-1・駐車場11台完備',
      href: '/access',
    },
  ]

  const departments = [
    {
      name: '一般内科',
      description: '川口市ですぐに対応。かぜ、発熱、生活習慣病管理など日常的な健康問題にすぐに診察',
      image: '/images/doctor.jpg',
    },
    {
      name: '消化器内科',
      description: '川口市の消化器内科専門医。胃痛・腹痛、便通異常、肝胆膵疾患にすぐに対応',
      image: '/images/内視鏡センター個室.jpg',
    },
    {
      name: '健康診断',
      description: '川口市で即日対応可能な健康診断。総合健診・人間ドック・各種検査',
      image: '/images/建物2.jpg',
    },
    {
      name: '内視鏡検査',
      description: '川口市の内視鏡専門医による苦痛の少ない胃・大腸カメラ。ポリープ切除にも対応',
      image: '/images/内視鏡センター.jpg',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* ターゲット層向けセクション */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="このような方はぜひご相談ください"
            subtitle="初めての方も安心して受診いただけます"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">初めて受診される方</h3>
              <p className="text-sm text-muted-foreground">
                急な体調不良でもすぐに対応いたします。
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">健康診断で異常を指摘された方</h3>
              <p className="text-sm text-muted-foreground">
                血液検査での異常や、胸部X線の影など、詳しい検査と治療を行います。
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">40歳以上の方</h3>
              <p className="text-sm text-muted-foreground">
                特定健診、がん検診など、生活習慣病の早期発見・予防に力を入れています。
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">急な不整脈でお困りの方</h3>
              <p className="text-sm text-muted-foreground">
                心電図検査をすぐに実施。循環器疾患の診断と治療を行います。
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">川口市ですぐに対応する内科クリニック</h2>
            <p className="text-lg text-muted-foreground">
              即日診察可能。内科診療から専門的な消化器検査まで、川口市の皆様にすぐに対応いたします
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {medicalServices.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
                <div className="flex justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading 
                title="診療時間・休診日"
                subtitle="川口市ですぐに対応・待ち時間短縮"
                center={false}
              />
              <div className="space-y-6">
                <Card className="p-6 bg-white/80 backdrop-blur">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    {calendarData.year}年 {calendarData.monthName}
                  </h4>
                  <div className="overflow-x-auto rounded-lg border">
                    <table className="w-full min-w-[280px]">
                      <thead>
                        <tr className="bg-secondary/50">
                          {weekDays.map((day, index) => {
                            // 月曜始まりのインデックスを日曜始まりのインデックスに変換
                            const dayOfWeekIndex = index === 6 ? 0 : index + 1
                            const isRegular = holidays.regularHolidays.weekdays.includes(dayOfWeekIndex)
                            const isHalfDay = holidays.halfDayHolidays?.weekdays.includes(dayOfWeekIndex) || false
                            return (
                              <th key={index} className={`py-1 sm:py-2 text-xs sm:text-sm font-medium px-1 ${
                                isRegular ? 'text-red-500' : 
                                isHalfDay ? 'text-orange-500' : ''
                              }`}>
                                <span className="block sm:hidden">{day.slice(0, 1)}</span>
                                <span className="hidden sm:block">{day}</span>
                              </th>
                            )
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {calendarData.weeks.map((week, weekIndex) => (
                          <tr key={weekIndex}>
                            {week.map((day, dayIndex) => (
                              <td key={dayIndex} className="border-t p-1 sm:p-2 text-center relative">
                                {day.isCurrentMonth && (
                                  <div className="relative">
                                    <div className={`
                                      inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm
                                      ${day.isToday ? 'bg-primary text-white font-bold' : ''}
                                      ${day.isHoliday && !day.isToday ? 'text-red-500' : ''}
                                      ${day.isHalfDayHoliday && !day.isHoliday && !day.isToday ? 'text-orange-500' : ''}
                                      ${!day.isHoliday && !day.isHalfDayHoliday && !day.isToday ? 'text-foreground' : ''}
                                      ${day.isSpecialHoliday ? 'ring-1 sm:ring-2 ring-orange-400' : ''}
                                    `}
                                    title={day.nationalHolidayName || day.specialHolidayReason || ''}>
                                      {day.date}
                                    </div>
                                    {(day.isHoliday || day.isHalfDayHoliday) && (
                                      <div className={`absolute -bottom-0.5 sm:-bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                                        day.isNationalHoliday ? 'bg-red-500' :
                                        day.isSpecialHoliday ? 'bg-orange-500' : 
                                        day.isHoliday ? 'bg-red-500' : 
                                        'bg-orange-400'
                                      }`}></div>
                                    )}
                                  </div>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-muted-foreground">定休日・祝日</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-muted-foreground">午後休み</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-muted-foreground">臨時休業</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">本日</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-white/80 backdrop-blur">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        診療時間
                      </h4>
                      <ClinicCalendar />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">休診日</h4>
                      <p className="text-muted-foreground">{scheduleInfo.holidays}</p>
                      <p className="text-sm text-muted-foreground mt-2">{scheduleInfo.note}</p>
                    </div>
                    <Button size="lg" className="w-full" asChild>
                      <a href="tel:048-222-0700">
                        <Phone className="w-4 h-4 mr-2" />
                        お電話でご相談ください
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <SectionHeading 
                title="アクセス"
                subtitle="川口市新井町・駐車場11台完備・バリアフリー対応"
                center={false}
              />
              <Card className="p-8 bg-white/80 backdrop-blur">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      新井町内科消化器クリニック
                    </h4>
                    <div className="space-y-3 text-muted-foreground">
                      <p>〒332-0005</p>
                      <p>埼玉県川口市新井町16-1</p>
                      <p className="font-medium text-foreground">TEL: 048-222-0700</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">川口元郷駅より徒歩10分・川口駅東口より徒歩15分</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">無料駐車場11台完備</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">エレベーター・バリアフリー対応</span>
                    </p>
                  </div>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="/access">
                      詳しい地図を見る
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <NewsSection />

      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="診療内容"
            subtitle="川口市の内科・消化器内科。すぐに対応・専門医が幅広く診療"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{dept.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{dept.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="院長ご挨拶"
            subtitle="地域の皆様へ"
          />
          <div className="max-w-4xl mx-auto">
            <Card className="p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="/images/院長.jpg" 
                        alt="院長 植村博之"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold">植村 博之</h3>
                      <p className="text-sm text-muted-foreground mt-1">うえむら ひろゆき</p>
                      <div className="mt-3 space-y-1">
                        <p className="text-sm text-muted-foreground">医学博士</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <p className="text-lg leading-relaxed">
                    地域の皆様、こんにちは。新井町内科消化器クリニック院長の植村博之です。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    2001年に川口市新井町で開院以来、地域の皆様の「かかりつけ医」として、すぐに対応できる体制で内科全般から消化器疾患まで幅広く診療を行っております。
                    特に内視鏡センターでは、上下部内視鏡検査において長年の経験と最新の技術を活かし、苦痛の少ない検査を心がけております。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    「患者様一人ひとりに寄り添い、分かりやすい説明と丁寧な診療」をモットーに、
                    皆様が安心して受診できるクリニックを目指しています。
                    些細な体調の変化でも、お気軽にご相談ください。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    これからも地域医療に貢献し、皆様の健康維持・増進のお手伝いをさせていただきます。
                    どうぞよろしくお願いいたします。
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