import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LoadingProvider } from '@/components/providers/LoadingProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' })

export const metadata: Metadata = {
  title: '新井町内科消化器クリニック',
  description: '川口市新井町の内科・消化器内科・アレルギー科。日本消化器内視鏡学会専門医による安心の内視鏡検査。川口元郷駅徒歩10分。',
  keywords: ['内科', '消化器内科', 'アレルギー科', '内視鏡検査', '川口市', '新井町', '川口元郷'],
  authors: [{ name: '新井町内科消化器クリニック' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://example.com',
    title: '新井町内科消化器クリニック',
    description: '川口市新井町の内科・消化器内科・アレルギー科。日本消化器内視鏡学会専門医による安心の内視鏡検査。',
    siteName: '新井町内科消化器クリニック',
  },
  twitter: {
    card: 'summary_large_image',
    title: '新井町内科消化器クリニック',
    description: '川口市新井町の内科・消化器内科・アレルギー科。日本消化器内視鏡学会専門医による安心の内視鏡検査。',
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
        <LoadingProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  )
}