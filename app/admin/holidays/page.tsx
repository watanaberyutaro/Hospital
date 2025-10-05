'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar, Trash2, Plus, X, Info } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { getJapaneseHolidays, type Holiday } from '@/src/lib/holidays'

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
  autoDetectNationalHolidays?: boolean
}

export default function AdminHolidaysPage() {
  const router = useRouter()
  const [holidays, setHolidays] = useState<HolidaysData>({
    regularHolidays: { weekdays: [0], description: "毎週日曜日" },
    halfDayHolidays: { weekdays: [3, 4, 6], description: "毎週水曜日・木曜日・土曜日" },
    specialHolidays: [],
    autoDetectNationalHolidays: true
  })
  const [nationalHolidays, setNationalHolidays] = useState<Holiday[]>([])
  const [isAddingHoliday, setIsAddingHoliday] = useState(false)
  const [newHolidayDate, setNewHolidayDate] = useState('')
  const [newHolidayReason, setNewHolidayReason] = useState('')
  const [loading, setLoading] = useState(true)
  const [isEditingRegular, setIsEditingRegular] = useState(false)
  const [selectedWeekdays, setSelectedWeekdays] = useState<number[]>([0])
  const [isEditingHalfDay, setIsEditingHalfDay] = useState(false)
  const [selectedHalfDayWeekdays, setSelectedHalfDayWeekdays] = useState<number[]>([3, 4, 6])

  useEffect(() => {
    fetchHolidays()
    // 今年の祝日を取得
    const currentYear = new Date().getFullYear()
    const holidays = getJapaneseHolidays(currentYear)
    setNationalHolidays(holidays)
  }, [])

  const fetchHolidays = async () => {
    try {
      const response = await fetch('/api/holidays')
      const data = await response.json()
      setHolidays(data)
    } catch (error) {
      console.error('Failed to fetch holidays:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddHoliday = async () => {
    if (!newHolidayDate) return

    try {
      const response = await fetch('/api/holidays', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: newHolidayDate,
          reason: newHolidayReason || '臨時休業'
        })
      })

      if (response.ok) {
        fetchHolidays()
        setIsAddingHoliday(false)
        setNewHolidayDate('')
        setNewHolidayReason('')
      }
    } catch (error) {
      console.error('Failed to add holiday:', error)
    }
  }

  const handleDeleteHoliday = async (id: string) => {
    if (!confirm('この臨時休業日を削除しますか？')) return

    try {
      const response = await fetch(`/api/holidays?id=${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        fetchHolidays()
      }
    } catch (error) {
      console.error('Failed to delete holiday:', error)
    }
  }

  const handleUpdateRegularHolidays = async () => {
    try {
      const weekdayNames = ['日', '月', '火', '水', '木', '金', '土']
      const description = selectedWeekdays.length > 0
        ? `毎週${selectedWeekdays.map(d => weekdayNames[d] + '曜日').join('・')}`
        : '定休日なし'

      const response = await fetch('/api/holidays/regular', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          weekdays: selectedWeekdays,
          description: description
        })
      })

      if (response.ok) {
        fetchHolidays()
        setIsEditingRegular(false)
      } else {
        const errorData = await response.json()
        console.error('Failed to update regular holidays:', errorData)
        alert(`定休日の更新に失敗しました: ${errorData.error || '不明なエラー'}\n${errorData.details || ''}`)
      }
    } catch (error) {
      console.error('Failed to update regular holidays:', error)
      alert(`定休日の更新に失敗しました: ${error instanceof Error ? error.message : '不明なエラー'}`)
    }
  }

  const handleUpdateHalfDayHolidays = async () => {
    try {
      const weekdayNames = ['日', '月', '火', '水', '木', '金', '土']
      const description = selectedHalfDayWeekdays.length > 0
        ? `毎週${selectedHalfDayWeekdays.map(d => weekdayNames[d] + '曜日').join('・')}`
        : '午後休みなし'

      const response = await fetch('/api/holidays/halfday', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          weekdays: selectedHalfDayWeekdays,
          description: description
        })
      })

      if (response.ok) {
        fetchHolidays()
        setIsEditingHalfDay(false)
      } else {
        const errorData = await response.json()
        console.error('Failed to update half-day holidays:', errorData)
        alert(`午後休みの更新に失敗しました: ${errorData.error || '不明なエラー'}\n${errorData.details || ''}`)
      }
    } catch (error) {
      console.error('Failed to update half-day holidays:', error)
      alert(`午後休みの更新に失敗しました: ${error instanceof Error ? error.message : '不明なエラー'}`)
    }
  }

  const toggleWeekday = (day: number) => {
    setSelectedWeekdays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day].sort()
    )
  }

  const toggleHalfDayWeekday = (day: number) => {
    setSelectedHalfDayWeekdays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day].sort()
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  const sortedSpecialHolidays = [...holidays.specialHolidays].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  const futureHolidays = sortedSpecialHolidays.filter(h => 
    new Date(h.date) >= new Date(new Date().toDateString())
  )

  const pastHolidays = sortedSpecialHolidays.filter(h => 
    new Date(h.date) < new Date(new Date().toDateString())
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">読み込み中...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              休診日管理
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              定休日と臨時休業日を管理します
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/news')}
            >
              お知らせ管理
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/admin')}
            >
              管理画面トップ
            </Button>
          </div>
        </div>

        <Card className="p-6 mb-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                祝日の自動反映について
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                日本の祝日は自動的に取得され、カレンダーに反映されます。
              </p>
              <div className="space-y-2">
                <p className="text-xs font-medium text-blue-700 dark:text-blue-300">
                  {new Date().getFullYear()}年の祝日：
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {nationalHolidays.slice(0, 6).map((holiday, index) => (
                    <div key={index} className="text-xs bg-white dark:bg-gray-800 rounded px-2 py-1">
                      <span className="font-medium">{holiday.date.slice(5)}</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">{holiday.name}</span>
                    </div>
                  ))}
                  {nationalHolidays.length > 6 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                      他{nationalHolidays.length - 6}件の祝日
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                定休日
              </h2>
              {!isEditingRegular && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setIsEditingRegular(true)
                    setSelectedWeekdays(holidays.regularHolidays.weekdays)
                  }}
                >
                  編集
                </Button>
              )}
            </div>
            <div className="space-y-4">
              {isEditingRegular ? (
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm font-medium mb-3">定休日を選択してください</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {['日', '月', '火', '水', '木', '金', '土'].map((day, index) => (
                      <button
                        key={index}
                        onClick={() => toggleWeekday(index)}
                        className={`flex-1 min-w-[38px] p-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedWeekdays.includes(index)
                            ? 'bg-primary text-white'
                            : 'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={handleUpdateRegularHolidays}
                    >
                      保存
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setIsEditingRegular(false)
                        setSelectedWeekdays(holidays.regularHolidays.weekdays)
                      }}
                    >
                      キャンセル
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-lg font-medium mb-2">
                    {holidays.regularHolidays.description || '定休日なし'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ※ 祝日も休診となります
                  </p>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-500" />
                午後休み
              </h2>
              {!isEditingHalfDay && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setIsEditingHalfDay(true)
                    setSelectedHalfDayWeekdays(holidays.halfDayHolidays?.weekdays || [])
                  }}
                >
                  編集
                </Button>
              )}
            </div>
            <div className="space-y-4">
              {isEditingHalfDay ? (
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm font-medium mb-3">午後休みの曜日を選択してください</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {['日', '月', '火', '水', '木', '金', '土'].map((day, index) => (
                      <button
                        key={index}
                        onClick={() => toggleHalfDayWeekday(index)}
                        className={`flex-1 min-w-[38px] p-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedHalfDayWeekdays.includes(index)
                            ? 'bg-orange-500 text-white'
                            : 'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={handleUpdateHalfDayHolidays}
                    >
                      保存
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setIsEditingHalfDay(false)
                        setSelectedHalfDayWeekdays(holidays.halfDayHolidays?.weekdays || [])
                      }}
                    >
                      キャンセル
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-lg font-medium mb-2">
                    {holidays.halfDayHolidays?.description || '午後休みなし'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ※ 午前のみ診療（午後休診）
                  </p>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                臨時休業日
              </h2>
              {!isAddingHoliday && (
                <Button
                  size="sm"
                  onClick={() => setIsAddingHoliday(true)}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  追加
                </Button>
              )}
            </div>

            {isAddingHoliday && (
              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      日付 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={newHolidayDate}
                      onChange={(e) => setNewHolidayDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      理由（任意）
                    </label>
                    <input
                      type="text"
                      value={newHolidayReason}
                      onChange={(e) => setNewHolidayReason(e.target.value)}
                      placeholder="例：院内研修のため"
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={handleAddHoliday}
                      disabled={!newHolidayDate}
                    >
                      追加
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setIsAddingHoliday(false)
                        setNewHolidayDate('')
                        setNewHolidayReason('')
                      }}
                    >
                      <X className="w-4 h-4 mr-1" />
                      キャンセル
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              {futureHolidays.length > 0 ? (
                <>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    今後の臨時休業日
                  </p>
                  {futureHolidays.map((holiday) => (
                    <div
                      key={holiday.id}
                      className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{formatDate(holiday.date)}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {holiday.reason}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeleteHoliday(holiday.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                  臨時休業日はありません
                </p>
              )}

              {pastHolidays.length > 0 && (
                <>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 mt-4">
                    過去の臨時休業日
                  </p>
                  {pastHolidays.slice(0, 3).map((holiday) => (
                    <div
                      key={holiday.id}
                      className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg opacity-60"
                    >
                      <div>
                        <p className="font-medium text-sm">{formatDate(holiday.date)}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {holiday.reason}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeleteHoliday(holiday.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-6">
          <h2 className="text-xl font-semibold mb-4">使い方</h2>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p>• 定休日は毎週指定した曜日が自動的にカレンダーに反映されます</p>
            <p>• 日本の祝日は自動的に取得され、休診日としてカレンダーに表示されます</p>
            <p>• 臨時休業日を追加すると、トップページのカレンダーに表示されます</p>
            <p>• 臨時休業日は理由を添えることができます（例：院内研修、設備点検など）</p>
            <p>• 過去の臨時休業日は自動的にグレーアウトされますが、手動で削除も可能です</p>
          </div>
        </Card>
      </div>
    </div>
  )
}