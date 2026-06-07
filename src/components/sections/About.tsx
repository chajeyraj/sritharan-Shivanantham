import { motion } from 'framer-motion'
import { Target, Eye, Compass, Quote, User } from 'lucide-react'
import { aboutContent, extraCurricular, personalInfo } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { GlassCard } from '@/components/shared/GlassCard'
import { revealProps } from '@/lib/motion'

const cards = [
  { icon: Eye, title: 'Objective', content: aboutContent.objective, color: '#00E5A8' },
  { icon: Target, title: 'Vision', content: aboutContent.vision, color: '#38BDF8' },
  { icon: Compass, title: 'Mission', content: aboutContent.mission, color: '#8B5CF6' },
]

const personalDetails = [
  { label: 'Full Name', value: personalInfo.fullName },
  { label: 'Date of Birth', value: personalInfo.dateOfBirth },
  { label: 'Nationality', value: personalInfo.nationality },
  { label: 'District', value: personalInfo.district },
  { label: 'Civil Status', value: personalInfo.civilStatus },
  { label: 'Total Service', value: personalInfo.totalService },
]

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="About"
          title="Profile of Profession"
          description="Zonal Director of Education — Paddiruppu Zonal Education Office, Kaluwanchikudy, Batticaloa."
        />

        <motion.div
          {...revealProps()}
          className="glass rounded-3xl p-8 md:p-12 mb-8 glow-primary glass-reflection"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Quote className="text-primary" size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-text mb-4">
                Professional Summary
              </h3>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                {aboutContent.summary}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div {...revealProps(0.06)} className="glass rounded-3xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-primary" size={22} aria-hidden="true" />
            <h3 className="font-display text-lg font-semibold text-text">Personal Information</h3>
          </div>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalDetails.map((item) => (
              <div key={item.label} className="rounded-xl bg-white/5 px-4 py-3">
                <dt className="text-xs text-muted uppercase tracking-wider mb-1">{item.label}</dt>
                <dd className="text-sm text-text font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <GlassCard
              key={card.title}
              {...revealProps(i * 0.06)}
              glow={i === 0 ? 'primary' : i === 1 ? 'secondary' : 'accent'}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${card.color}15` }}
              >
                <card.icon size={24} style={{ color: card.color }} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-text mb-3">{card.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{card.content}</p>
            </GlassCard>
          ))}
        </div>

        <motion.div {...revealProps(0.1)} className="glass rounded-3xl p-8">
          <h3 className="font-display text-lg font-semibold text-text mb-4">
            Extra Curricular Activities
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {extraCurricular.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-primary mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
