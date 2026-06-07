import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { revealProps } from '@/lib/motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  return (
    <motion.div
      {...revealProps()}
      className={cn('mb-16 text-center max-w-3xl mx-auto', className)}
    >
      <span className="inline-block mb-4 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase text-primary">
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
