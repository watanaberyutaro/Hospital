import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://araityounaikasyoukaki.com'
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/services/general-medicine',
    '/services/gastroenterology',
    '/endoscopy',
    '/staff',
    '/facilities',
    '/news',
    '/faq',
    '/health-checkup',
  ]

  const sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.9 : 0.8,
  }))

  // Add dynamic news pages
  try {
    const newsData = require('../public/data/news.json')
    if (newsData.news && Array.isArray(newsData.news)) {
      newsData.news.forEach((article: any) => {
        sitemap.push({
          url: `${baseUrl}/news/${article.id}`,
          lastModified: new Date(article.date),
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        })
      })
    }
  } catch (error) {
    console.error('Error loading news data for sitemap:', error)
  }

  return sitemap
}