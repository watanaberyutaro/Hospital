import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'ホーム', href: '/' },
    { name: 'クリニック紹介', href: '/about' },
    { name: '診療内容', href: '/departments' },
    { name: '症状・検査', href: '/symptoms' },
    { name: '内視鏡センター', href: '/endoscopy' },
    { name: 'よくある質問', href: '/faq' },
    { name: 'アクセス', href: '/access' },
    { name: 'プライバシーポリシー', href: '/privacy' },
  ]

  const departments = [
    { name: '一般内科', href: '/departments/internal-medicine' },
    { name: '消化器内科', href: '/departments/gastroenterology' },
    { name: '健康診断', href: '/departments/health-checkup' },
    { name: '胃カメラ検査', href: '/endoscopy' },
    { name: '大腸カメラ検査', href: '/endoscopy' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground/95 to-primary/20 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=800&fit=crop" 
          alt="病院の外観"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-20 h-20 flex-shrink-0 bg-sky-100 rounded-xl shadow-lg p-[5px] border border-sky-200">
                <Image
                  src="/images/Logo.png"
                  alt="新井町内科消化器クリニック ロゴ"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">新井町内科消化器クリニック</h3>
                <p className="text-sm text-white/70">Araichō Internal Medicine & Gastroenterology Clinic</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              2001年設立。内科・消化器内科の専門医が、<br />
              地域のかかりつけ医として幅広く診療します。
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-white/20 transition-all duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
                    className="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
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
                    className="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
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
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="text-white/80">
                  <p>〒332-0005</p>
                  <p>埼玉県川口市新井町16-1</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/80">TEL: 048-222-0700</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div className="text-white/80">
                  <p className="mb-3">診療時間: 午前の部9:00～12:30 / 午後の部15:00～18:00</p>
                  <div className="bg-white/10 rounded-lg p-3 mb-2">
                    <table className="w-full text-xs">
                      <thead>
                        <tr>
                          <th className="text-left py-1 text-white/60">曜日</th>
                          <th className="py-1 px-1 text-red-300">日</th>
                          <th className="py-1 px-1">月</th>
                          <th className="py-1 px-1">火</th>
                          <th className="py-1 px-1">水</th>
                          <th className="py-1 px-1">木</th>
                          <th className="py-1 px-1">金</th>
                          <th className="py-1 px-1 text-blue-300">土</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-1 text-white/60">午前</td>
                          <td className="py-1 px-1 text-center text-white/40">×</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-white/60">午後</td>
                          <td className="py-1 px-1 text-center text-white/40">×</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                          <td className="py-1 px-1 text-center text-white/40">×</td>
                          <td className="py-1 px-1 text-center text-green-400">●</td>
                          <td className="py-1 px-1 text-center text-white/40">×</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs">受付: 終了30分前までの受付をお願いいたします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} 新井町内科消化器クリニック. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=200&h=50&fit=crop" 
              alt="医療認証マーク"
              className="h-8 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}