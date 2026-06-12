import { Star } from 'lucide-react'

interface FutureUpdateProps {
  message?: string
}

export function FutureUpdate({ message = "この項目は今後更新予定です" }: FutureUpdateProps) {
  return (
    <div className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm">
      <Star className="w-4 h-4 fill-current" />
      <span>{message}</span>
    </div>
  )
}