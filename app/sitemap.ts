import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://araityounaikasyoukaki.com'
  const lastModified = new Date()

  const routes = [
    '/about',
    '/departments',
    '/symptoms',
    '/endoscopy',
    '/faq',
  ]

  const sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return sitemap
}
