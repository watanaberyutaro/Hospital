import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' })

export const metadata: Metadata = {
  title: '地域医療センター病院',
  description: '地域の皆様に寄り添う医療を提供する総合病院です。',
  keywords: ['病院', '医療', '診療科', '地域医療'],
  authors: [{ name: '地域医療センター病院' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://example.com',
    title: '地域医療センター病院',
    description: '地域の皆様に寄り添う医療を提供する総合病院です。',
    siteName: '地域医療センター病院',
  },
  twitter: {
    card: 'summary_large_image',
    title: '地域医療センター病院',
    description: '地域の皆様に寄り添う医療を提供する総合病院です。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}