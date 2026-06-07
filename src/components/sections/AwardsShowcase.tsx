import { motion } from 'framer-motion'
import { Trophy, Sparkles } from 'lucide-react'
import { awards } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { revealProps } from '@/lib/motion'

export function AwardsShowcase() {
  return (
    <section id="awards" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Awards"
          title="Honours & Recognition"
          description="Prestigious national awards celebrating distinguished service and academic excellence."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              {...revealProps(i * 0.06)}
              className="glass rounded-2xl p-6 text-center h-full hover-lift border border-primary/10"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 relative">
                <Trophy className="text-primary" size={28} />
                <Sparkles className="absolute -top-1 -right-1 text-secondary" size={14} />
              </div>
              <span className="text-xs text-primary font-bold">{award.year}</span>
              <h3 className="font-display text-lg font-semibold text-text mt-2 mb-3">
                {award.title}
              </h3>
              <p className="text-muted text-xs leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
