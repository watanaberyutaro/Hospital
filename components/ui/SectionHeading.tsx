import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  center?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  className,
  center = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-16 animate-in',
        center ? 'text-center' : 'text-left',
        className
      )}
    >
      <div className="relative inline-block">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 relative z-10">
          {title}
        </h2>
        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-xl -z-10"></div>
      </div>
      {subtitle && (
        <p className={cn(
          "text-xl text-muted-foreground leading-relaxed mt-4",
          center ? "max-w-3xl mx-auto" : ""
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}