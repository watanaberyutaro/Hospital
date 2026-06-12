'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Loading } from '@/components/ui/Loading'

interface LoadingContextType {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
})

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider')
  }
  return context
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  const startLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const stopLoading = useCallback(() => {
    // Keep loading animation visible for 1.5 seconds
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  // Handle route changes
  useEffect(() => {
    const handleStart = () => startLoading()
    const handleComplete = () => stopLoading()

    // Listen to link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href && !link.target && !link.download) {
        const url = new URL(link.href)
        if (url.origin === window.location.origin && url.pathname !== pathname) {
          handleStart()
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [pathname, startLoading, stopLoading])

  // Stop loading when pathname changes
  useEffect(() => {
    stopLoading()
  }, [pathname, stopLoading])

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  )
}