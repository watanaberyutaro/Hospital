import Link from 'next/link'
import { Button } from './Button'
import { Heart, Users, Award, Clock, Phone } from 'lucide-react'

export function Hero() {
  const features = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: '専門医による診療',
      description: '消化器病・内視鏡・肝臓の専門医資格を持つ院長',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: '安心の内視鏡検査',
      description: '鎮静下で楽に受けられる胃・大腸カメラ',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: '地域密着の医療',
      description: '2001年設立のかかりつけ医として幅広い診療に対応',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'アクセス良好',
      description: '駐車場完備(軽1台・普通車10台)',
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-background via-primary/5 to-accent/10 py-24 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent/30 rounded-full animate-float animation-delay-3000"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-primary/40 rounded-full animate-float animation-delay-4000"></div>
      </div>
      
      {/* Animated lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight animate-fade-in">
            <span className="text-foreground block">地域に密着した</span>
            <span className="text-foreground block animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="md:hidden">
                <span className="inline-block">内科・消化器内科の</span>
                <span className="inline-block">かかりつけ医</span>
              </span>
              <span className="hidden md:inline">内科・消化器内科のかかりつけ医</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            新井町内科消化器クリニックでは、専門医資格を持つ医師が<br />
            一般内科から消化器内科まで幅広く診療します。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <Button size="lg" className="text-lg px-8 animate-bounce-in flex items-center gap-2" style={{ animationDelay: '800ms' }}>
              <Phone className="w-5 h-5" />
              <a href="tel:048-222-0700">お電話はこちら 048-222-0700</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 animate-bounce-in" style={{ animationDelay: '1000ms' }}>
              <Link href="/about">病院概要</Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-6 text-primary p-4 bg-primary/10 rounded-2xl w-fit mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}