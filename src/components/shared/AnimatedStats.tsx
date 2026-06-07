import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import { revealProps } from '@/lib/motion'

interface StatItem {
  value: number
  suffix: string
  label: string
}

interface AnimatedStatsProps {
  stats: StatItem[]
}

function StatCounter({ value, suffix, label }: StatItem) {
  const { count, ref } = useCountUp(value, 1400)

  return (
    <motion.div ref={ref} {...revealProps()} className="text-center">
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted text-xs sm:text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
      {stats.map((stat) => (
        <StatCounter key={stat.label} {...stat} />
      ))}
    </div>
  )
}
