import { usePerformanceProfile } from '@/hooks/usePerformanceProfile'

export function GlobalBackground() {
  const { reducedMotion, enableEffects } = usePerformanceProfile()

  return (
    <>
      {/* Base diamond-theme layer */}
      <div className="theme-base-bg" aria-hidden="true" />

      {/* Diamond imagery — subtle premium accent */}
      {enableEffects && (
        <div className="theme-diamond-bg" aria-hidden="true">
          <picture>
            <source srcSet="/theme-diamond.webp" type="image/webp" />
            <img src="/theme-diamond.png" alt="" className="theme-diamond-img" loading="lazy" decoding="async" />
          </picture>
        </div>
      )}

      {/* Cyan / sapphire light blooms */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className={`aurora-blob aurora-blob-1 ${reducedMotion ? 'aurora-static' : ''}`}
          style={{
            background:
              'radial-gradient(circle, rgba(34,211,238,0.14) 0%, rgba(14,116,144,0.06) 40%, transparent 70%)',
          }}
        />
        <div
          className={`aurora-blob aurora-blob-2 ${reducedMotion ? 'aurora-static' : ''}`}
          style={{
            background:
              'radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(30,58,138,0.05) 45%, transparent 70%)',
          }}
        />
        <div
          className={`aurora-blob aurora-blob-3 ${reducedMotion ? 'aurora-static' : ''}`}
          style={{
            background:
              'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="theme-vignette" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.025] grid-bg" aria-hidden="true" />
    </>
  )
}
