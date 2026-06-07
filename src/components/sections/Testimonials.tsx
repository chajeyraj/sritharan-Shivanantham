import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { revealProps } from '@/lib/motion'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Testimonials"
          title="Words of Recognition"
          description="Endorsements from colleagues, academics, and international education professionals."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.author}
              {...revealProps(i * 0.08)}
              className="glass rounded-2xl p-8 relative hover-lift"
            >
              <Quote className="text-primary/30 absolute top-6 right-6" size={32} />
              <p className="text-muted text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <p className="font-semibold text-text text-sm">{item.author}</p>
                  <p className="text-primary text-xs mt-1">{item.role}</p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
