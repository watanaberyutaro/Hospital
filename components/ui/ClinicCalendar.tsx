import { Calendar } from 'lucide-react'

export function ClinicCalendar() {
  const weekDays = ['日', '月', '火', '水', '木', '金', '土']
  
  const scheduleData = [
    { day: '日', morning: '休診', afternoon: '休診', isHoliday: true },
    { day: '月', morning: '○', afternoon: '○' },
    { day: '火', morning: '○', afternoon: '○' },
    { day: '水', morning: '○', afternoon: '○' },
    { day: '木', morning: '○', afternoon: '休診' },
    { day: '金', morning: '○', afternoon: '○' },
    { day: '土', morning: '○', afternoon: '休診' },
  ]
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold">診療カレンダー</span>
      </div>
      <table className="w-full text-xs">
        <thead>
          <tr>
            <th className="text-left py-1 text-gray-600 dark:text-gray-400">曜日</th>
            {weekDays.map((day, index) => (
              <th key={index} className={`py-1 px-1 ${index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300'}`}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-1 text-gray-600 dark:text-gray-400">午前</td>
            {scheduleData.map((schedule, index) => (
              <td key={index} className="py-1 px-1 text-center">
                {schedule.morning === '○' ? (
                  <span className="text-green-600">●</span>
                ) : (
                  <span className="text-gray-400">✕</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-1 text-gray-600 dark:text-gray-400">午後</td>
            {scheduleData.map((schedule, index) => (
              <td key={index} className="py-1 px-1 text-center">
                {schedule.afternoon === '○' ? (
                  <span className="text-green-600">●</span>
                ) : (
                  <span className="text-gray-400">✕</span>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">
        <p>午前の部: 9:00～12:30</p>
        <p>午後の部: 15:00～18:00</p>
      </div>
    </div>
  )
}