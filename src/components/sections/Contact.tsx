import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { siteConfig, socialLinks } from '@/data/content'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MagneticButton } from '@/components/shared/MagneticButton'
import { getIcon } from '@/lib/icons'
import { revealProps } from '@/lib/motion'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Get in Touch"
          description="Connect for collaborations, conference invitations, research partnerships, or professional inquiries."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div {...revealProps()} className="lg:col-span-2 space-y-6">
            <div className="glass rounded-3xl p-8 glow-primary">
              <h3 className="font-display text-xl font-semibold text-text mb-6">
                Executive Contact
              </h3>
              <div className="space-y-5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-muted hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                    <p className="text-sm text-text">{siteConfig.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 text-muted hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="text-secondary" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Mobile</p>
                    <p className="text-sm text-text">{siteConfig.phone}</p>
                  </div>
                </a>
                <a
                  href={`tel:${siteConfig.phoneResident.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 text-muted hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="text-secondary" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Residence</p>
                    <p className="text-sm text-text">{siteConfig.phoneResident}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-muted">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">Location</p>
                    <p className="text-sm text-text">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-glass-border">
                <p className="text-xs text-muted uppercase tracking-wider mb-4">Connect</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = getIcon(link.icon)
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted hover:text-primary hover:glow-primary transition-all"
                      >
                        {Icon && <Icon size={18} />}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative text-center">
                <MapPin className="text-primary mx-auto mb-2" size={24} aria-hidden="true" />
                <p className="text-sm text-text font-medium">Paddiruppu Zonal Education Office</p>
                <p className="text-xs text-muted mt-1">Kaluwanchikudy, Batticaloa</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            {...revealProps(0.08)}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-display text-xl font-semibold text-text mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle className="text-primary mb-4" size={48} />
                <p className="text-text font-semibold mb-2">Message Sent Successfully</p>
                <p className="text-muted text-sm">Thank you for reaching out. A response will follow shortly.</p>
              </motion.div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" placeholder="Your organization" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Inquiry subject" required />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." required />
                </div>
                <div className="sm:col-span-2">
                  <MagneticButton type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    <Send size={18} />
                    Send Message
                  </MagneticButton>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
