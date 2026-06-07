import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { timelineEvents, totalServicePeriod } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { revealProps } from '@/lib/motion'

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 40%'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Career Timeline"
          description={`Complete service record across schools and zonal education offices — Total Service: ${totalServicePeriod}.`}
        />

        <div ref={containerRef} className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            />
          </div>

          <div className="space-y-10">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={`${event.station}-${event.period}`}
                {...revealProps(i * 0.04)}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}
                >
                  <div className="glass rounded-2xl p-6 inline-block hover-lift text-left max-w-md w-full">
                    <span className="text-primary font-bold text-sm tracking-wider">
                      {event.period}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-text mt-2 mb-1">
                      {event.designation}
                    </h3>
                    <p className="text-secondary text-sm font-medium mb-3">{event.station}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-muted">
                      Duration: {event.duration}
                    </span>
                    {'note' in event && event.note && (
                      <p className="text-muted text-xs leading-relaxed mt-3 border-t border-glass-border pt-3">
                        {event.note}
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          {...revealProps(0.1)}
          className="mt-12 glass rounded-2xl p-6 text-center border border-primary/20 glow-primary"
        >
          <p className="text-muted text-sm uppercase tracking-widest mb-2">
            Total Service Period
          </p>
          <p className="font-display text-3xl font-bold text-gradient-primary">
            {totalServicePeriod}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
