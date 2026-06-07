import { motion } from 'framer-motion'
import { getIcon } from '@/lib/icons'
import { trainingProgrammes, trainingSessions } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { useCountUp } from '@/hooks/useCountUp'
import { revealProps } from '@/lib/motion'

function TrainingCounter({
  name,
  count,
  icon,
  delay,
}: {
  name: string
  count: number
  icon: string
  delay: number
}) {
  const { count: animatedCount, ref } = useCountUp(count, 1400)
  const Icon = getIcon(icon)

  return (
    <motion.div ref={ref} {...revealProps(delay)} className="glass rounded-2xl p-6 text-center hover-lift">
      <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
        {Icon && <Icon size={26} className="text-secondary" aria-hidden="true" />}
      </div>
      <p className="text-4xl font-display font-bold text-gradient-primary mb-2">{animatedCount}+</p>
      <p className="text-muted text-sm">{name}</p>
    </motion.div>
  )
}

export function Training() {
  return (
    <section id="training" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Training"
          title="National Training Programmes Delivered"
          description="Resource person and trainer for NIE, UNICEF, ESCO, and national SLEAS capacity-building programmes."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trainingProgrammes.map((programme, i) => (
            <TrainingCounter key={programme.name} {...programme} delay={i * 0.06} />
          ))}
        </div>

        <motion.div {...revealProps(0.1)} className="glass rounded-3xl p-8">
          <h3 className="font-display text-lg font-semibold text-text mb-6">
            Programmes Conducted
          </h3>
          <ol className="grid md:grid-cols-2 gap-4">
            {trainingSessions.map((session, index) => (
              <li key={session} className="flex gap-3 text-sm text-muted leading-relaxed">
                <span className="text-primary font-semibold shrink-0">{index + 1}.</span>
                {session}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
