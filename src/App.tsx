import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { GlobalBackground } from '@/components/effects/GlobalEffects'
import { SmoothScroll } from '@/components/effects/SmoothScroll'
import { Hero } from '@/components/sections/Hero'
import { DURATION, EASE_OUT } from '@/lib/motion'

const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })))
const Timeline = lazy(() => import('@/components/sections/Timeline').then((m) => ({ default: m.Timeline })))
const Education = lazy(() => import('@/components/sections/Education').then((m) => ({ default: m.Education })))
const Qualifications = lazy(() => import('@/components/sections/Qualifications').then((m) => ({ default: m.Qualifications })))
const Research = lazy(() => import('@/components/sections/Research').then((m) => ({ default: m.Research })))
const Publications = lazy(() => import('@/components/sections/Publications').then((m) => ({ default: m.Publications })))
const Conferences = lazy(() => import('@/components/sections/Conferences').then((m) => ({ default: m.Conferences })))
const ICTInnovations = lazy(() => import('@/components/sections/ICTInnovations').then((m) => ({ default: m.ICTInnovations })))
const AwardsShowcase = lazy(() => import('@/components/sections/AwardsShowcase').then((m) => ({ default: m.AwardsShowcase })))
const Skills = lazy(() => import('@/components/sections/Skills').then((m) => ({ default: m.Skills })))
const Training = lazy(() => import('@/components/sections/Training').then((m) => ({ default: m.Training })))
const Gallery = lazy(() => import('@/components/sections/Gallery').then((m) => ({ default: m.Gallery })))
const Testimonials = lazy(() => import('@/components/sections/Testimonials').then((m) => ({ default: m.Testimonials })))
const Contact = lazy(() => import('@/components/sections/Contact').then((m) => ({ default: m.Contact })))

function SectionFallback() {
  return <div className="section-padding min-h-[32vh]" aria-hidden="true" />
}

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: DURATION.base, ease: EASE_OUT }}>
        <SmoothScroll>
          <GlobalBackground />

          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <div className="relative z-10">
            <Navbar />
            <main id="main-content">
              <Hero />
              <Suspense fallback={<SectionFallback />}>
                <About />
                <Timeline />
                <Education />
                <Qualifications />
                <Research />
                <Publications />
                <Conferences />
                <ICTInnovations />
                <AwardsShowcase />
                <Skills />
                <Training />
                <Gallery />
                <Testimonials />
                <Contact />
              </Suspense>
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
