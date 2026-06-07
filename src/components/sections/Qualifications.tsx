import { motion } from 'framer-motion'
import { getIcon } from '@/lib/icons'
import { qualifications } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { revealProps } from '@/lib/motion'

export function Qualifications() {
  return (
    <section id="qualifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Qualifications"
          title="Professional Credentials"
          description="Recognized certifications and specializations demonstrating expertise across education management and research."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {qualifications.map((item, i) => {
            const Icon = getIcon(item.icon)
            return (
              <motion.div
                key={item.title}
                {...revealProps(i * 0.05)}
                className="glass rounded-2xl p-6 text-center group hover-lift"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  {Icon && <Icon size={26} className="text-secondary" aria-hidden="true" />}
                </div>
                <h3 className="font-semibold text-text text-sm mb-1">{item.title}</h3>
                <p className="text-muted text-xs">{item.category}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
