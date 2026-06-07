import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import { usePerformanceProfile } from '@/hooks/usePerformanceProfile'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const { smoothScroll, reducedMotion } = usePerformanceProfile()

  useEffect(() => {
    if (!smoothScroll || reducedMotion) return

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
      infinite: false,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [smoothScroll, reducedMotion])

  return <>{children}</>
}
