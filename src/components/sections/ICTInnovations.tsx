import { motion } from 'framer-motion'
import { getIcon } from '@/lib/icons'
import { ictAwards } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { revealProps } from '@/lib/motion'

export function ICTInnovations() {
  return (
    <section id="ict" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          label="ICT Innovation"
          title="Digital Excellence & Awards"
          description="Pioneering ICT solutions and receiving national recognition for digital government innovation."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {ictAwards.map((award, i) => {
            const Icon = getIcon(award.icon)
            return (
              <motion.div
                key={award.title}
                {...revealProps(i * 0.08)}
                className="relative glass-strong rounded-2xl p-8 h-full hover-lift"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  {Icon && <Icon size={30} className="text-primary" aria-hidden="true" />}
                </div>
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                  {award.year}
                </span>
                <h3 className="font-display text-xl font-bold text-text mt-2 mb-3">
                  {award.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{award.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
