import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonBaseProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'default' | 'lg'
}

interface MagneticLinkProps extends MagneticButtonBaseProps {
  href: string
  type?: never
  onClick?: never
}

interface MagneticButtonProps extends MagneticButtonBaseProps {
  href?: never
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

type Props = MagneticLinkProps | MagneticButtonProps

export function MagneticButton({
  children,
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: Props) {
  const baseClasses = cn(
    'relative inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-300 overflow-hidden group',
    size === 'lg' ? 'h-13 px-8 text-base' : 'h-11 px-6 text-sm',
    variant === 'primary' &&
      'bg-primary text-background hover:shadow-[0_0_30px_rgba(0,229,168,0.4)]',
    variant === 'secondary' && 'glass text-text hover:bg-white/12',
    variant === 'outline' &&
      'border border-glass-border bg-transparent hover:bg-white/5 text-text',
    className
  )

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="relative z-10">{children}</span>
    </>
  )

  if ('href' in props && props.href) {
    return (
      <motion.a
        href={props.href}
        className={baseClasses}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    )
  }

  const buttonProps = props as MagneticButtonProps

  return (
    <motion.button
      type={buttonProps.type ?? 'button'}
      onClick={buttonProps.onClick}
      className={baseClasses}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  )
}
