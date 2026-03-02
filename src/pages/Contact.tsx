import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Lass uns <span className="text-gradient">reden</span>
          </h1>
          <p className="text-xl text-[var(--color-text-main)]/70 leading-relaxed">
            Haben Sie ein Projekt im Kopf? Wir freuen uns darauf, von Ihnen zu hören und gemeinsam Großes zu erschaffen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kontaktinformationen</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Mail className="text-[var(--color-primary)]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-main)]/50 mb-1">E-Mail</p>
                    <a href="mailto:hello@techvision.com" className="text-lg hover:text-[var(--color-primary)] transition-colors">
                      hello@techvision.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[var(--color-secondary)]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-main)]/50 mb-1">Telefon</p>
                    <a href="tel:+49123456789" className="text-lg hover:text-[var(--color-secondary)] transition-colors">
                      +49 (0) 123 456 789
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[var(--color-primary)]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-main)]/50 mb-1">Büro</p>
                    <p className="text-lg">
                      Innovationspark 1<br />
                      10115 Berlin, Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[var(--color-primary)]/[0.02] border border-[var(--color-primary)]/[0.1] rounded-3xl p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-[var(--color-text-main)]/70">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[var(--color-bg)] border border-[var(--color-primary)]/20 rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-[var(--color-text-main)]/70">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[var(--color-bg)] border border-[var(--color-primary)]/20 rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="max@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-[var(--color-text-main)]/70">Betreff</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[var(--color-bg)] border border-[var(--color-primary)]/20 rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="Projektanfrage"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-[var(--color-text-main)]/70">Nachricht</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-[var(--color-bg)] border border-[var(--color-primary)]/20 rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Wie können wir helfen?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white font-semibold py-4 rounded-xl hover:bg-[var(--color-secondary)] transition-colors mt-4"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
