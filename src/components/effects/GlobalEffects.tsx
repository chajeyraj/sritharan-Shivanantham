import { usePerformanceProfile } from '@/hooks/usePerformanceProfile'

export function GlobalBackground() {
  const { reducedMotion, enableEffects } = usePerformanceProfile()

  if (!enableEffects) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,229,168,0.08), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(56,189,248,0.05), transparent 50%)',
        }}
      />
    )
  }

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className={`aurora-blob aurora-blob-1 ${reducedMotion ? 'aurora-static' : ''}`}
          style={{
            background: 'radial-gradient(circle, rgba(0,229,168,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className={`aurora-blob aurora-blob-2 ${reducedMotion ? 'aurora-static' : ''}`}
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          }}
        />
      </div>
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] grid-bg" aria-hidden="true" />
    </>
  )
}
