import { motion } from 'framer-motion'
import { MapPin, Mic, Star, Trophy } from 'lucide-react'
import { conferences, spotlightAchievement } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { revealProps } from '@/lib/motion'

export function Conferences() {
  return (
    <section id="conferences" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Conferences"
          title="Conference Presentations"
          description="Research presentations at national and international conferences across Sri Lankan universities and research forums."
        />

        <motion.div
          {...revealProps()}
          className="glass rounded-3xl p-8 md:p-10 mb-12 glow-primary border border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
              <Trophy className="text-primary" size={36} aria-hidden="true" />
            </div>
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                Spotlight Achievement
              </span>
              <h3 className="font-display text-2xl font-bold text-text mt-1 mb-2">
                {spotlightAchievement.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{spotlightAchievement.description}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {conferences.map((conf, i) => (
            <motion.div
              key={conf.title}
              {...revealProps(i * 0.05)}
              className={`glass rounded-2xl p-6 hover-lift ${
                conf.highlight ? 'glow-secondary border border-secondary/20' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl font-display font-bold text-gradient-primary">
                  {conf.year}
                </span>
                {conf.highlight && (
                  <Star className="text-secondary fill-secondary" size={18} aria-hidden="true" />
                )}
              </div>
              <h3 className="font-semibold text-text mb-3">{conf.title}</h3>
              <div className="flex flex-col gap-2 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-secondary shrink-0" aria-hidden="true" />
                  {conf.location}
                </span>
                <span className="flex items-center gap-2">
                  <Mic size={14} className="text-primary shrink-0" aria-hidden="true" />
                  {conf.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
