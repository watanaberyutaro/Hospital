import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'ホーム', href: '/' },
    { name: '病院概要', href: '/about' },
    { name: '診療科', href: '/departments' },
    { name: 'お知らせ', href: '/news' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  const departments = [
    { name: '内科', href: '/departments/internal-medicine' },
    { name: '外科', href: '/departments/surgery' },
    { name: '小児科', href: '/departments/pediatrics' },
    { name: '産婦人科', href: '/departments/obstetrics-gynecology' },
    { name: '整形外科', href: '/departments/orthopedics' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">地域医療センター病院</h3>
                <p className="text-sm text-gray-400">Community Medical Center</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              地域の皆様に寄り添い、安心で質の高い医療を提供いたします。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">診療科</h4>
            <ul className="space-y-2">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link
                    href={dept.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>〒106-0032</p>
                  <p>東京都港区六本木1-2-3</p>
                  <p>メディカルビル5階</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-400">TEL: 03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-400">info@hospital.example.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>平日: 9:00-17:00</p>
                  <p>土曜: 9:00-12:00</p>
                  <p>日祝: 休診</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} 地域医療センター病院. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}