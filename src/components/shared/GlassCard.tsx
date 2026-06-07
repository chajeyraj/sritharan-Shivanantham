import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  glow?: 'primary' | 'secondary' | 'accent' | 'none'
  reflection?: boolean
}

export function GlassCard({
  children,
  className,
  glow = 'none',
  reflection = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass rounded-2xl p-6 md:p-8 hover-lift',
        reflection && 'glass-reflection',
        glow === 'primary' && 'glow-primary',
        glow === 'secondary' && 'glow-secondary',
        glow === 'accent' && 'shadow-[0_0_32px_rgba(139,92,246,0.12)]',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
