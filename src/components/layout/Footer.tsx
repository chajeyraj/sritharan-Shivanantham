import { ArrowUp, Mail, MapPin } from 'lucide-react'
import { navLinks, siteConfig, socialLinks } from '@/data/content'
import { getIcon } from '@/lib/icons'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-glass-border bg-background/50">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-display text-xl font-bold text-text mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-primary text-sm font-semibold mb-2">{siteConfig.title}</p>
            <p className="text-muted text-sm">{siteConfig.role}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-muted text-sm hover:text-primary transition-colors"
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2 text-muted text-sm">
                <MapPin size={16} />
                {siteConfig.location}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = getIcon(link.icon)
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-glass-border">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Executive Educational Leadership Portfolio
          </p>
          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-primary hover-lift transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
