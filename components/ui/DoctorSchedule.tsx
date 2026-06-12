import { Card } from '@/components/ui/Card'
import { Users } from 'lucide-react'

export function DoctorSchedule() {
  const schedule = [
    { day: '月', morning: '副院長', afternoon: '副院長' },
    { day: '火', morning: '副院長', afternoon: '医長' },
    { day: '水', morning: '院長', afternoon: '院長' },
    { day: '木', morning: '院長', afternoon: 'ー' },
    { day: '金', morning: '院長', afternoon: '副院長' },
    { day: '土', morning: '副院長', afternoon: 'ー' },
  ]

  const doctors = [
    { title: '院長', name: '植村 博之' },
    { title: '副院長', name: '植村 隼人' },
    { title: '医長', name: '植村 伶央' },
  ]

  return (
    <Card className="p-6 bg-white/80 backdrop-blur">
      <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-primary" />
        診療医師担当表
      </h4>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[280px]">
          <thead>
            <tr className="bg-secondary/50">
              <th className="py-2 px-3 text-sm font-medium text-left border-r">曜日</th>
              <th className="py-2 px-3 text-sm font-medium text-center border-r">午前</th>
              <th className="py-2 px-3 text-sm font-medium text-center">午後</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index} className="border-t hover:bg-secondary/20 transition-colors">
                <td className="py-2 px-3 text-sm font-medium border-r">{item.day}</td>
                <td className="py-2 px-3 text-sm text-center border-r">{item.morning}</td>
                <td className="py-2 px-3 text-sm text-center">{item.afternoon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 space-y-2">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <span className="font-medium text-muted-foreground min-w-[60px]">{doctor.title}：</span>
            <span className="text-foreground">{doctor.name}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
