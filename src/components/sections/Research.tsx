import { motion } from 'framer-motion'
import { BookOpen, FlaskConical, TrendingUp } from 'lucide-react'
import { researchItems, publications } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { revealProps } from '@/lib/motion'

export function Research() {
  const completedCount = researchItems.filter((r) =>
    ['Completed', 'Viva Completed'].includes(r.status)
  ).length
  const publicationCount =
    publications.books.length +
    publications.articles.length +
    publications.papers.length +
    publications.poetry.length

  return (
    <section id="research" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Research"
          title="Research Portfolio"
          description="Research topics and academic investigations undertaken across M.Ed, M.Phil, PGDEM, PGDE, HNDE, and HNDIT programmes."
        />

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: BookOpen, label: 'Research Topics', value: researchItems.length },
            { icon: FlaskConical, label: 'Completed Studies', value: completedCount },
            { icon: TrendingUp, label: 'Publications', value: publicationCount },
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              {...revealProps(i * 0.05)}
              className="glass rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <metric.icon className="text-primary" size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gradient-primary">{metric.value}</p>
                <p className="text-muted text-sm">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchItems.map((item, i) => (
            <motion.article
              key={item.title}
              {...revealProps(i * 0.05)}
              className="glass rounded-2xl p-8 hover-lift group"
            >
              <div className="flex items-center justify-between mb-4 gap-3">
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {item.type}
                </span>
                <span className="text-muted text-xs shrink-0">{item.year}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{item.abstract}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs">
                Status: {item.status}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
