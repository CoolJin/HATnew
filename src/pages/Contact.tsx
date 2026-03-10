import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Printer } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GlareCard } from '@/components/ui/glare-card';

export function Contact() {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: <Phone className="text-[var(--color-primary)]" size={20} />,
      label: t('contact.labels.phone'),
      content: <a href="tel:+4971764521000" className="text-lg hover:text-[var(--color-primary)] transition-colors font-medium">07176 / 452100</a>,
    },
    {
      icon: <Printer className="text-[var(--color-primary)]" size={20} />,
      label: t('contact.labels.fax'),
      content: <p className="text-lg font-medium">07176 / 452101</p>,
    },
    {
      icon: <Phone className="text-[var(--color-secondary)]" size={20} />,
      label: t('contact.labels.mobile'),
      content: <a href="tel:+491782099567" className="text-lg hover:text-[var(--color-secondary)] transition-colors font-medium">0178 / 2099567</a>,
    },
    {
      icon: <Mail className="text-[var(--color-primary)]" size={20} />,
      label: t('contact.labels.email'),
      content: <a href="mailto:info@heinze-at.de" className="text-lg hover:text-[var(--color-primary)] transition-colors font-medium">info@heinze-at.de</a>,
    },
    {
      icon: <MapPin className="text-[var(--color-primary)]" size={20} />,
      label: t('contact.labels.address'),
      content: (
        <p className="text-lg font-medium leading-relaxed">
          Utzstetter Str. 7/2<br />
          73577 Ruppertshofen<br />
          Deutschland
        </p>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            {t('contact.heading')} <span className="text-gradient">{t('contact.headingHighlight')}</span>
          </h1>
          <p className="text-xl text-[var(--color-text-main)]/70 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-6">{t('contact.infoHeading')}</h3>
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
              >
                <GlareCard className="flex items-start gap-4 p-5 rounded-3xl bg-[var(--color-primary)]/[0.03] border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/60 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/20">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-main)]/50 mb-1">{item.label}</p>
                    {item.content}
                  </div>
                </GlareCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-28 lg:pt-[3.75rem]"
          >
            <div className="rounded-3xl overflow-hidden border border-[var(--color-primary)]/20 shadow-2xl" style={{ height: '500px' }}>
              <iframe
                title="Standort Heinze Automatisierungstechnik"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.0!2d9.9!3d48.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVXR6c3RldHRlciBTdHIuIDcvMiwgNzM1NzcgUnVwcGVydHNob2Zlbg!5e0!3m2!1sde!2sde!4v1709641200000!5m2!1sde!2sde&q=Utzstetter+Str.+7%2F2+73577+Ruppertshofen"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
