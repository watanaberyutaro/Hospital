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
    { name: '病院概要', href: '/about' },
    { name: '診療科', href: '/departments' },
    { name: 'お知らせ', href: '/news' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="border-b border-gray-200 dark:border-gray-700 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">TEL: 03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">平日 9:00-17:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">東京都港区</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                日本語
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                English
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                地域医療センター病院
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Community Medical Center
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4">
              <Link href="/appointment">診療予約</Link>
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
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-4 w-full">
              <Link href="/appointment">診療予約</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}