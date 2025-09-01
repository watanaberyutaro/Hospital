import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LoadingProvider } from '@/components/providers/LoadingProvider'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' })

export const metadata: Metadata = {
  title: '新井町内科消化器クリニック | 川口市の内科・消化器内科 | 予約なし対応・すぐに診察',
  description: '川口市新井町の内科・消化器内科。予約なしですぐに対応。発熱・風邪・体調不良の即日診察可能。日本消化器内視鏡学会専門医による胃カメラ・大腸カメラ検査。川口元郷駅徒歩10分、駐車場11台完備。土曜診療あり。',
  keywords: ['川口市 内科', '川口市 病院', '川口 内科 予約なし', 'すぐに対応 病院', '即日診察', '川口市 消化器内科', '川口 胃カメラ', '川口 大腸カメラ', '内視鏡検査 川口', '新井町 クリニック', '川口元郷 内科', '土曜診療 川口', '駐車場あり 病院', '発熱外来 川口', '予約不要 内科'],
  authors: [{ name: '新井町内科消化器クリニック' }],
  alternates: {
    canonical: 'https://araityounaikasyoukaki.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://araityounaikasyoukaki.com',
    title: '新井町内科消化器クリニック | 川口市の内科・予約なし対応',
    description: '川口市新井町の内科・消化器内科。予約なしですぐに診察可能。発熱・体調不良の即日対応。駐車場11台完備。土曜診療あり。',
    siteName: '新井町内科消化器クリニック',
    images: [
      {
        url: '/images/建物.jpg',
        width: 1200,
        height: 630,
        alt: '新井町内科消化器クリニック外観',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '新井町内科消化器クリニック | 川口市・予約なし対応',
    description: '川口市の内科・消化器内科。予約なしですぐに診察。発熱・体調不良の即日対応。駐車場完備。',
    images: ['/images/建物.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "新井町内科消化器クリニック",
  "alternateName": "新井町内科消化器クリニック",
  "url": "https://araityounaikasyoukaki.com",
  "logo": "/images/建物.jpg",
  "image": "/images/建物.jpg",
  "description": "川口市新井町の内科・消化器内科。予約なしですぐに対応。発熱・風邪・体調不良の即日診察可能。",
  "telephone": "048-222-0700",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "新井町16-1",
    "addressLocality": "川口市",
    "addressRegion": "埼玉県",
    "postalCode": "332-0005",
    "addressCountry": "JP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.8244,
    "longitude": 139.7241
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday"],
      "opens": "09:00",
      "closes": "12:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday"],
      "opens": "15:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Thursday", "Saturday"],
      "opens": "09:00",
      "closes": "12:30"
    }
  ],
  "medicalSpecialty": [
    "InternalMedicine",
    "Gastroenterology"
  ],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "胃カメラ検査",
      "description": "経口・経鼻両方対応の上部消化管内視鏡検査"
    },
    {
      "@type": "MedicalProcedure",
      "name": "大腸カメラ検査",
      "description": "日帰りポリープ切除対応の下部消化管内視鏡検査"
    },
    {
      "@type": "MedicalProcedure",
      "name": "一般内科診療",
      "description": "風邪、発熱、生活習慣病などの診療"
    }
  ],
  "priceRange": "保険診療",
  "acceptsReservations": "False",
  "paymentAccepted": ["現金", "健康保険証"],
  "foundingDate": "2001",
  "slogan": "予約なしですぐに対応・川口市の内科クリニック"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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