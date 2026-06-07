import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Book, FileText, Scroll, Feather, ChevronRight } from 'lucide-react'
import { publications } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'

const tabs = [
  { key: 'books' as const, label: 'Books', icon: Book },
  { key: 'articles' as const, label: 'Articles', icon: FileText },
  { key: 'papers' as const, label: 'Research Papers', icon: Scroll },
  { key: 'poetry' as const, label: 'Poetry', icon: Feather },
]

export function Publications() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[0]['key']>('books')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const items = publications[activeTab]

  return (
    <section id="publications" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Publications"
          title="Literary & Academic Works"
          description="An interactive collection of books, articles, research papers, and poetry publications."
        />

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key)
                setExpandedId(null)
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-primary/15 text-primary border border-primary/30 glow-primary'
                  : 'glass text-muted hover:text-text'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => {
                const id = `${activeTab}-${i}`
                const isExpanded = expandedId === id
                return (
                  <motion.div
                    key={id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setExpandedId(isExpanded ? null : id)}
                    className={`glass rounded-2xl cursor-pointer transition-all duration-500 ${
                      isExpanded ? 'sm:col-span-2 lg:col-span-3 glow-primary' : 'hover:glow-secondary'
                    }`}
                  >
                    <div className={`p-6 ${isExpanded ? 'md:p-8' : ''}`}>
                      <div className="flex items-start gap-4">
                        <div
                          className={`shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center transition-all ${
                            isExpanded ? 'w-20 h-28' : 'w-14 h-20'
                          }`}
                        >
                          <Book className="text-primary" size={isExpanded ? 32 : 24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-muted uppercase tracking-wider">
                            {item.type}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-text mt-1 mb-2">
                            {item.title}
                          </h3>
                          <span className="text-primary text-sm">{item.year}</span>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-muted text-sm mt-4 leading-relaxed"
                              >
                                A significant contribution to the field of education, reflecting deep
                                academic insight and practical leadership experience in Sri Lankan
                                educational context.
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        <ChevronRight
                          size={18}
                          className={`text-muted shrink-0 transition-transform ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
