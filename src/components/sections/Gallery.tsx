import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Camera } from 'lucide-react'
import { galleryItems } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'

const aspectClasses: Record<string, string> = {
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
}

export function Gallery() {
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [visibleCount, setVisibleCount] = useState(6)

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + 3, galleryItems.length))
  }, [])

  const visibleItems = galleryItems.slice(0, visibleCount)

  return (
    <section id="gallery" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Gallery"
          title="Moments & Milestones"
          description="A visual journey through leadership events, conferences, and educational initiatives."
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {visibleItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '50px' }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => setLightboxItem(item)}
                className={`relative w-full ${aspectClasses[item.aspect]} rounded-2xl overflow-hidden glass group cursor-pointer`}
                aria-label={`View ${item.title}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <Camera className="text-primary/50 mb-3" size={32} />
                  <h3 className="font-semibold text-text text-sm text-center">{item.title}</h3>
                  <span className="text-muted text-xs mt-1">{item.category}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-white" size={28} />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {visibleCount < galleryItems.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={loadMore}
              className="px-8 py-3 rounded-xl glass text-sm text-muted hover:text-primary hover:glow-primary transition-all"
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass-strong rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text hover:text-primary"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex flex-col items-center justify-center p-12">
                <Camera className="text-primary mb-4" size={48} />
                <h3 className="font-display text-2xl font-bold text-text mb-2">
                  {lightboxItem.title}
                </h3>
                <p className="text-muted">{lightboxItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
