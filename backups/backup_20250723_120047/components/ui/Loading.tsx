'use client'

import { useEffect, useState } from 'react'

export function Loading() {
  const [dots, setDots] = useState('')
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 400)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100] flex items-center justify-center">
      <div className="relative">
        {/* Animated medical cross */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/30 rounded-full animate-ping animation-delay-200"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 3v2H6a2 2 0 00-2 2v2a2 2 0 002 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2V3a2 2 0 00-2-2H8a2 2 0 00-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-foreground">
            診療準備中{dots}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            少々お待ちください
          </p>
        </div>
        
        {/* Animated dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}