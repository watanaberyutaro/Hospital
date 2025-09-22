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
  title: '川口市 内科 消化器内科 予約なし | 胃カメラ 大腸カメラ 専門医 | 新井町内科消化器クリニック',
  description: '川口市新井町の内科・消化器内科。予約なしで発熱・胃痛・腹痛・便秘・下痢・逆流性食道炎の即日診察。専門医による胃カメラ・大腸カメラ検査。川口元郷駅徒歩12分、駐車場11台完備。',
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
    google: '4jtCXeZ1LbXOzFjqBvsXqKr5p8JQwTCsEpOajK8dti4',
  },
}

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://araityounaikasyoukaki.com/#organization",
    "name": "新井町内科消化器クリニック",
    "alternateName": "Araicho Internal Medicine and Gastroenterology Clinic",
    "url": "https://araityounaikasyoukaki.com",
    "logo": "https://araityounaikasyoukaki.com/images/建物.jpg",
    "image": "https://araityounaikasyoukaki.com/images/建物.jpg",
    "description": "川口市新井町の内科・消化器内科。予約なしで即日診察可能。日本消化器内視鏡学会専門医による胃カメラ・大腸カメラ検査。",
    "telephone": "+81-48-222-0700",
    "faxNumber": "+81-48-222-0701",
    "email": "info@araityounaikasyoukaki.com",
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
    "department": [
      {
        "@type": "MedicalClinic",
        "name": "内科",
        "medicalSpecialty": "InternalMedicine"
      },
      {
        "@type": "MedicalClinic",
        "name": "消化器内科",
        "medicalSpecialty": "Gastroenterology"
      }
    ],
    "medicalSpecialty": [
      "InternalMedicine",
      "Gastroenterology"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "@id": "#gastroscopy",
        "name": "胃カメラ検査（上部消化管内視鏡検査）",
        "alternateName": "Gastroscopy",
        "description": "経口・経鼻両方対応。鎮静剤使用可能。日本消化器内視鏡学会専門医が実施。",
        "procedureType": "Diagnostic",
        "bodyLocation": "Stomach",
        "preparation": "検査前日21時以降絶食",
        "followup": "検査結果は当日説明"
      },
      {
        "@type": "MedicalProcedure",
        "@id": "#colonoscopy",
        "name": "大腸カメラ検査（下部消化管内視鏡検査）",
        "alternateName": "Colonoscopy",
        "description": "日帰りポリープ切除対応。鎮静剤使用可能。大腸がん早期発見。",
        "procedureType": "Diagnostic",
        "bodyLocation": "Colon",
        "preparation": "検査前日から専用食、当日下剤服用",
        "followup": "ポリープ切除の場合は後日病理結果説明"
      },
      {
        "@type": "MedicalProcedure",
        "@id": "#general-internal-medicine",
        "name": "一般内科診療",
        "description": "風邪、発熱、頭痛、腹痛、高血圧、糖尿病、脂質異常症などの診療",
        "procedureType": "Treatment"
      },
      {
        "@type": "MedicalProcedure",
        "@id": "#fever-outpatient",
        "name": "発熱外来",
        "description": "インフルエンザ、新型コロナウイルス、溶連菌の検査・治療",
        "procedureType": "Treatment"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "診療内容",
      "itemListElement": [
        {
          "@type": "MedicalService",
          "name": "内科診療",
          "description": "一般内科、生活習慣病管理"
        },
        {
          "@type": "MedicalService",
          "name": "消化器内科診療",
          "description": "胃腸疾患、肝胆膵疾患の診断・治療"
        },
        {
          "@type": "MedicalService",
          "name": "内視鏡検査",
          "description": "胃カメラ・大腸カメラ検査"
        },
        {
          "@type": "MedicalService",
          "name": "健康診断",
          "description": "特定健診、がん検診、企業健診"
        }
      ]
    },
    "priceRange": "保険診療",
    "acceptsReservations": false,
    "paymentAccepted": ["現金", "健康保険証", "各種医療証"],
    "foundingDate": "2001",
    "slogan": "予約なしですぐに対応・川口市の内科クリニック",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "駐車場",
        "value": "11台完備"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "バリアフリー",
        "value": "エレベーター完備"
      }
    ],
    "member": {
      "@type": "Physician",
      "@id": "#dr-uemura",
      "name": "植村 博之",
      "givenName": "博之",
      "familyName": "植村",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "医学博士",
      "jobTitle": "院長",
      "worksFor": {
        "@id": "https://araityounaikasyoukaki.com/#organization"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "日本医科大学"
        }
      ],
      "memberOf": [
        {
          "@type": "MedicalOrganization",
          "name": "日本消化器内視鏡学会",
          "award": "専門医"
        },
        {
          "@type": "MedicalOrganization",
          "name": "日本内科学会",
          "award": "認定医"
        },
        {
          "@type": "MedicalOrganization",
          "name": "日本消化器病学会"
        }
      ],
      "medicalSpecialty": ["InternalMedicine", "Gastroenterology"],
      "description": "2001年開院。地域の皆様の健康を守るかかりつけ医として、丁寧で分かりやすい診療を心がけています。"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://araityounaikasyoukaki.com/#localbusiness",
    "name": "新井町内科消化器クリニック",
    "image": "https://araityounaikasyoukaki.com/images/建物.jpg",
    "url": "https://araityounaikasyoukaki.com",
    "telephone": "+81-48-222-0700",
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
    "sameAs": [
      "https://www.facebook.com/araichoclinic",
      "https://www.instagram.com/araichoclinic"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://araityounaikasyoukaki.com",
    "name": "新井町内科消化器クリニック",
    "description": "川口市新井町の内科・消化器内科クリニック",
    "publisher": {
      "@id": "https://araityounaikasyoukaki.com/#organization"
    }
  }
]

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