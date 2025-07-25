'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: 'クリニック紹介', href: '/about' },
    { name: '診療内容', href: '/departments' },
    { name: '医師紹介', href: '/doctors' },
    { name: '内視鏡センター', href: '/endoscopy' },
    { name: 'アクセス', href: '/access' },
  ]

  return (
    <header className="bg-card/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-border/50">
      <div className="bg-primary/5 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 overflow-x-auto">
              <div className="flex items-center gap-2 whitespace-nowrap group">
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">048-222-0700</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 whitespace-nowrap group">
                <Clock className="w-4 h-4 text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">9:00-12:30 / 15:00-18:00</span>
              </div>
              <div className="hidden lg:flex items-center gap-2 whitespace-nowrap group">
                <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">埼玉県川口市新井町16-1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105 flex-shrink-0">
              <span className="text-white font-bold text-lg md:text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                新井町内科消化器科クリニック
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground hidden lg:block">
                Araichō Internal Medicine & Gastroenterology Clinic
              </p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-base font-bold text-foreground leading-tight">
                新井町内科<br />消化器科クリニック
              </h1>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-all duration-200 font-medium text-sm xl:text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <Button className="ml-4 shadow-lg shadow-primary/20 flex items-center gap-2 text-sm xl:text-base">
              <Phone className="w-4 h-4" />
              <a href="tel:048-222-0700">電話予約</a>
            </Button>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-card/95 backdrop-blur-lg animate-in slide-in-from-top-2">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-4 w-full shadow-lg flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:048-222-0700" className="w-full">電話予約</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}