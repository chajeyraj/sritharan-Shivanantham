import { motion } from 'framer-motion'
import { skills } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'

function CircularProgress({
  name,
  level,
  delay,
}: {
  name: string
  level: number
  delay: number
}) {
  const circumference = 2 * Math.PI * 45
  const offset = circumference - (level / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#skillGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3, duration: 1.5, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5A8" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-text">{level}%</span>
        </div>
      </div>
      <p className="text-sm text-muted mt-3 text-center">{name}</p>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Skills"
          title="Competencies & Expertise"
          description="Multilingual proficiency and advanced technology competencies supporting modern educational leadership."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="font-display text-xl font-semibold text-text mb-8 text-center">
              Languages
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {skills.languages.map((skill, i) => (
                <CircularProgress key={skill.name} {...skill} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="font-display text-xl font-semibold text-text mb-8 text-center">
              Technology
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.technology.map((skill, i) => (
                <CircularProgress key={skill.name} {...skill} delay={i * 0.1 + 0.3} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
