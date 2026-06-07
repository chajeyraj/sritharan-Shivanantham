import { useEffect, useState } from 'react'

export interface PerformanceProfile {
  isMobile: boolean
  reducedMotion: boolean
  smoothScroll: boolean
  enableEffects: boolean
}

const defaultProfile: PerformanceProfile = {
  isMobile: false,
  reducedMotion: false,
  smoothScroll: false,
  enableEffects: false,
}

function readProfile(): PerformanceProfile {
  if (typeof window === 'undefined') return defaultProfile

  const isMobile =
    window.matchMedia('(max-width: 768px)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const saveData = 'connection' in navigator && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
  const lowMemory =
    'deviceMemory' in navigator &&
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4

  const lowPower = isMobile || reducedMotion || !!saveData || lowMemory

  return {
    isMobile,
    reducedMotion,
    smoothScroll: !lowPower && window.innerWidth >= 1024,
    enableEffects: !lowPower && window.innerWidth >= 768,
  }
}

export function usePerformanceProfile(): PerformanceProfile {
  const [profile, setProfile] = useState(readProfile)

  useEffect(() => {
    const update = () => setProfile(readProfile())

    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    mobileQuery.addEventListener('change', update)
    motionQuery.addEventListener('change', update)
    window.addEventListener('resize', update, { passive: true })

    return () => {
      mobileQuery.removeEventListener('change', update)
      motionQuery.removeEventListener('change', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return profile
}
