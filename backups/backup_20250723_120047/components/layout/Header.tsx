'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Clock, MapPin, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: 'クリニック紹介', href: '/about' },
    { name: '診療内容', href: '/departments' },
    { name: '内視鏡センター', href: '/endoscopy' },
    { name: 'アクセス', href: '/access' },
  ]

  return (
    <header className="bg-card/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-border/50">
      <div className="bg-primary/5 py-3">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 group">
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">TEL: 048-222-0700</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 group">
                <Clock className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">月火水金 9:00-12:30 / 16:00-18:30</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 group">
                <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">埼玉県川口市新井町</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-primary/10"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <button className="text-muted-foreground hover:text-primary transition-all duration-200 px-3 py-1 rounded-lg hover:bg-primary/10">
                日本語
              </button>
              <button className="text-muted-foreground hover:text-primary transition-all duration-200 px-3 py-1 rounded-lg hover:bg-primary/10">
                English
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                新井町内科消化器クリニック
              </h1>
              <p className="text-sm text-muted-foreground">
                Araichō Internal Medicine & Gastroenterology Clinic
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-all duration-200 font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Button className="ml-6 shadow-lg shadow-primary/20 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:048-222-0700">電話予約</a>
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-lg animate-in slide-in-from-top-2">
          <nav className="container mx-auto px-6 py-6 space-y-1">
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
            <Button className="mt-6 w-full shadow-lg flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:048-222-0700" className="w-full">電話予約</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}