import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './Button'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  className?: string
}

export function Pagination({
  currentPage,
  totalPages,
  baseUrl,
  className,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      const startPage = Math.max(1, currentPage - 2)
      const endPage = Math.min(totalPages, currentPage + 2)

      if (startPage > 1) {
        pages.push(1)
        if (startPage > 2) pages.push('...')
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pages = getPageNumbers()

  return (
    <nav className={cn('flex items-center justify-center space-x-2', className)}>
      <Button
        variant="outline"
        size="sm"
        asChild
        disabled={currentPage === 1}
      >
        <Link href={`${baseUrl}?page=${currentPage - 1}`}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          前へ
        </Link>
      </Button>

      {pages.map((page, index) => (
        <div key={index}>
          {page === '...' ? (
            <span className="px-3 py-2 text-gray-500">...</span>
          ) : (
            <Button
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              asChild
            >
              <Link href={`${baseUrl}?page=${page}`}>{page}</Link>
            </Button>
          )}
        </div>
      ))}

      <Button
        variant="outline"
        size="sm"
        asChild
        disabled={currentPage === totalPages}
      >
        <Link href={`${baseUrl}?page=${currentPage + 1}`}>
          次へ
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </Button>
    </nav>
  )
}