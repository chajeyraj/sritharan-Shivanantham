import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { educationItems } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { revealProps } from '@/lib/motion'

function EducationCard({
  item,
  index,
}: {
  item: (typeof educationItems)[0]
  index: number
}) {
  return (
    <motion.div
      {...revealProps(index * 0.06)}
      className="glass rounded-2xl p-6 group hover-lift"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
        style={{ background: `${item.color}15` }}
      >
        <GraduationCap size={28} style={{ color: item.color }} />
      </div>
      <span
        className="text-3xl font-display font-bold mb-2 block"
        style={{ color: item.color }}
      >
        {item.degree}
      </span>
      <h3 className="text-text font-semibold mb-1">{item.field}</h3>
      <p className="text-muted text-sm mb-3">{item.institution}</p>
      <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-muted">
        {item.year}
      </span>
    </motion.div>
  )
}

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Education"
          title="Academic Qualifications"
          description="A comprehensive academic foundation spanning undergraduate to postgraduate research degrees."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationItems.map((item, i) => (
            <EducationCard key={item.degree} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
