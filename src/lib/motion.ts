export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const DURATION = {
  fast: 0.3,
  base: 0.45,
  slow: 0.6,
} as const

export const VIEWPORT = {
  once: true,
  margin: '0px 0px -40px 0px' as const,
  amount: 0.12 as const,
}

export const revealTransition = (delay = 0) => ({
  duration: DURATION.base,
  ease: EASE_OUT,
  delay,
})

export const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: revealTransition(delay),
})
