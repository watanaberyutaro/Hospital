'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DepartmentEndoscopyPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/endoscopy')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>リダイレクト中...</p>
    </div>
  )
}