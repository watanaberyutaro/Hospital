import Link from 'next/link'
import { Button } from './Button'
import { Heart, Users, Award, Clock } from 'lucide-react'

export function Hero() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: '質の高い医療',
      description: '最新の医療技術と設備で患者様をサポート',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '専門医による診療',
      description: '各分野の専門医が連携した総合的な医療',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '地域医療の拠点',
      description: '地域の皆様に愛され続けて30年',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24時間対応',
      description: '緊急時も安心の救急医療体制',
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 py-20">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            地域の皆様に
            <span className="text-primary"> 寄り添う医療</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            私たちは最新の医療技術と温かい心で、患者様一人ひとりに最適な医療を提供いたします。
            地域の健康を支える医療機関として、皆様の信頼にお応えします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild>
              <Link href="/appointment">診療予約</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">病院概要</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}