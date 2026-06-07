import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/content'
import { cn } from '@/lib/utils'
import { DURATION, EASE_OUT } from '@/lib/motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  return (
    <>
      <m.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION.base, ease: EASE_OUT }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[padding,background-color] duration-300',
          scrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          <a href="#" className="group flex flex-col" aria-label={`${siteConfig.name} home`}>
            <span className="font-display text-lg font-bold text-text group-hover:text-primary transition-colors">
              S. Sritharan
            </span>
            <span className="text-[10px] text-primary tracking-widest uppercase">
              {siteConfig.title}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm text-muted hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex h-10 px-5 items-center rounded-xl bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-text"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </nav>
      </m.header>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.fast }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 bg-background/85"
              aria-label="Close menu overlay"
              onClick={() => setMobileOpen(false)}
            />
            <m.nav
              id="mobile-navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: DURATION.base, ease: EASE_OUT }}
              className="absolute right-0 top-0 bottom-0 w-72 glass-strong p-8 pt-24"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-text hover:text-primary hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </m.nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
