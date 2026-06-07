import { useState, useEffect } from 'react'
import { m } from 'framer-motion'
import { ArrowDown, Download, FileText, Briefcase } from 'lucide-react'
import { heroStats, siteConfig, typewriterRoles } from '@/data/content'
import { AnimatedStats } from '@/components/shared/AnimatedStats'
import { MagneticButton } from '@/components/shared/MagneticButton'
import { DURATION, EASE_OUT } from '@/lib/motion'

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex]
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1))
          } else {
            window.setTimeout(() => setIsDeleting(true), 1800)
          }
        } else if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % typewriterRoles.length)
        }
      },
      isDeleting ? 35 : 70
    )
    return () => window.clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(0,229,168,0.06) 0%, transparent 45%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, ease: EASE_OUT }}
          >
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase text-primary">
              Executive Portfolio
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-text">Mr. Shivanantham</span>
              <br />
              <span className="text-gradient">Sritharan</span>
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                {siteConfig.title}
              </span>
              <span className="text-muted text-sm">{siteConfig.role}</span>
            </div>
            <p className="text-muted text-sm mb-4 max-w-xl leading-relaxed">{siteConfig.office}</p>

            <div className="h-8 mb-8" aria-live="polite" aria-atomic="true">
              <span className="text-secondary text-lg md:text-xl font-medium">
                {displayText}
                <span className="animate-pulse text-primary" aria-hidden="true">
                  |
                </span>
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <MagneticButton href="#about" variant="primary" size="lg">
                <Briefcase size={18} aria-hidden="true" />
                View Portfolio
              </MagneticButton>
              <MagneticButton href="#research" variant="secondary" size="lg">
                <FileText size={18} aria-hidden="true" />
                Research Works
              </MagneticButton>
              <MagneticButton href="#" variant="outline" size="lg">
                <Download size={18} aria-hidden="true" />
                Download CV
              </MagneticButton>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.base, delay: 0.1, ease: EASE_OUT }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
              <div className="relative w-72 sm:w-80 rounded-3xl glass-strong overflow-hidden border border-primary/10">
                <div className="relative aspect-[4/5] bg-white">
                  <picture>
                    <source srcSet="/portrait.webp" type="image/webp" />
                    <img
                      src={siteConfig.portrait}
                      alt={siteConfig.portraitAlt}
                      width={320}
                      height={400}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="h-full w-full object-cover object-top"
                    />
                  </picture>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/90 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                  <p className="font-display text-base sm:text-lg font-semibold text-text">
                    Mr. Shivanantham Sritharan
                  </p>
                  <p className="text-primary text-sm mt-1">{siteConfig.title}</p>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 w-18 h-18 rounded-2xl glass flex items-center justify-center px-4 py-3">
                <span className="text-xl font-bold text-secondary">28+</span>
              </div>
            </div>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.base, delay: 0.15, ease: EASE_OUT }}
          className="mt-16 pt-12 border-t border-glass-border"
        >
          <AnimatedStats stats={heroStats} />
        </m.div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ArrowDown size={20} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
