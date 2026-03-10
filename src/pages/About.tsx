import { motion } from 'motion/react';
import { Users, Target, Zap, ShieldCheck, Clock, Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GlareCard } from '@/components/ui/glare-card';

export function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Users size={36} className="text-[var(--color-primary)]" />,
      title: t('about.values.erfahrung.title'),
      desc: t('about.values.erfahrung.desc'),
    },
    {
      icon: <Target size={36} className="text-[var(--color-secondary)]" />,
      title: t('about.values.qualitaet.title'),
      desc: t('about.values.qualitaet.desc'),
    },
    {
      icon: <Zap size={36} className="text-[var(--color-primary)]" />,
      title: t('about.values.flexibilitaet.title'),
      desc: t('about.values.flexibilitaet.desc'),
    },
    {
      icon: <ShieldCheck size={36} className="text-[var(--color-secondary)]" />,
      title: t('about.values.zuverlaessigkeit.title'),
      desc: t('about.values.zuverlaessigkeit.desc'),
    },
    {
      icon: <Clock size={36} className="text-[var(--color-primary)]" />,
      title: t('about.values.effizienz.title'),
      desc: t('about.values.effizienz.desc'),
    },
    {
      icon: <Handshake size={36} className="text-[var(--color-secondary)]" />,
      title: t('about.values.partnerschaft.title'),
      desc: t('about.values.partnerschaft.desc'),
    },
  ];

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-8 break-words md:break-normal hyphens-auto md:hyphens-none">
            {t('about.heading')} <span className="text-gradient">{t('about.headingHighlight')}</span>
          </h1>
          <p className="text-xl text-[var(--color-text-main)]/70 leading-relaxed">
            {t('about.subtitle')}
            <strong className="text-[var(--color-text-main)]"> {t('about.subtitleLocation')}</strong>.{' '}
            {t('about.subtitleEnd')}
          </p>
        </motion.div>

        {/* Claim Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-10 rounded-3xl border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            {t('about.claim')}
          </h2>
          <p className="text-[var(--color-text-main)]/70 text-lg leading-relaxed max-w-3xl">
            {t('about.claimText')}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlareCard className="group p-8 rounded-3xl bg-[var(--color-primary)]/[0.02] border border-[var(--color-primary)]/[0.1] hover:bg-[var(--color-primary)]/[0.06] hover:border-[var(--color-primary)]/[0.25] transition-all duration-300 h-full flex flex-col">
                <div className="mb-6 p-4 rounded-2xl bg-[var(--color-bg)] inline-block border border-[var(--color-primary)]/20 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[var(--color-text-main)]/60 leading-relaxed text-sm">{item.desc}</p>
              </GlareCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
