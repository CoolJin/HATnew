import { motion } from 'motion/react';
import { ArrowRight, Cpu, Wrench, RefreshCw, Settings, Zap, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '@/hooks/useLangPath';
import { GlareCard } from '@/components/ui/glare-card';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import logoUrl from '../assets/HAT Heinze _17032015_1OHNELINK.png';

export function Home() {
  const { t } = useTranslation();
  const lp = useLangPath();

  const services = [
    {
      icon: <Factory className="text-[var(--color-primary)]" size={32} />,
      title: t('home.services.sondermaschinenbau.title'),
      desc: t('home.services.sondermaschinenbau.desc'),
      link: lp('/services'),
    },
    {
      icon: <Cpu className="text-[var(--color-secondary)]" size={32} />,
      title: t('home.services.steuerungsbau.title'),
      desc: t('home.services.steuerungsbau.desc'),
      link: lp('/services'),
    },
    {
      icon: <RefreshCw className="text-[var(--color-primary)]" size={32} />,
      title: t('home.services.retrofit.title'),
      desc: t('home.services.retrofit.desc'),
      link: lp('/services'),
    },
    {
      icon: <Wrench className="text-[var(--color-secondary)]" size={32} />,
      title: t('home.services.verpackungsmaschinen.title'),
      desc: t('home.services.verpackungsmaschinen.desc'),
      link: lp('/services'),
    },
    {
      icon: <Settings className="text-[var(--color-primary)]" size={32} />,
      title: t('home.services.mechanikElektrik.title'),
      desc: t('home.services.mechanikElektrik.desc'),
      link: lp('/services'),
    },
    {
      icon: <Zap className="text-[var(--color-secondary)]" size={32} />,
      title: t('home.services.vollservice.title'),
      desc: t('home.services.vollservice.desc'),
      link: lp('/services'),
    },
  ];

  return (
    <div className="w-full bg-[var(--color-bg)]">
      {/* Hero Section */}
      <BackgroundGradientAnimation
        containerClassName="-mt-20 !h-screen w-full"
        className="relative flex items-center justify-center px-6 h-full"
      >
        {/* Logo – fixed at the top of the hero, below navbar */}
        <motion.img
          src={logoUrl}
          alt="Heinze Automatisierungstechnik"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute top-[22vh] left-1/2 -translate-x-1/2 z-10 h-14 sm:h-16 md:h-20 w-auto"
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 backdrop-blur-sm text-sm font-medium tracking-wide text-[var(--color-text-main)]"
          >
            {t('home.hero.location')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1] break-words md:break-normal hyphens-auto md:hyphens-none"
          >
            {t('home.hero.title')} <br />
            <span className="text-gradient">{t('home.hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl text-[var(--color-text-main)]/70 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
          >
            {t('home.hero.subtitle')}
            <strong className="text-[var(--color-text-main)]"> {t('home.hero.subtitleBold')}</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to={lp('/services')}
              data-magnetic
              className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold tracking-wide hover:bg-[var(--color-secondary)] transition-colors duration-300"
            >
              {t('home.hero.ctaServices')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={lp('/contact')}
              data-magnetic
              className="px-8 py-4 rounded-full font-semibold tracking-wide border border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10 transition-colors duration-300 text-[var(--color-text-main)]"
            >
              {t('home.hero.ctaContact')}
            </Link>
          </motion.div>
        </div>
      </BackgroundGradientAnimation>

      {/* Services Grid */}
      <section className="py-24 bg-[var(--color-surface)] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              {t('home.services.heading')} <span className="text-gradient">{t('home.services.headingHighlight')}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlareCard className="group p-6 md:p-8 rounded-3xl bg-[var(--color-primary)]/[0.02] border border-[var(--color-primary)]/[0.1] hover:bg-[var(--color-primary)]/[0.06] hover:border-[var(--color-primary)]/[0.25] transition-all duration-300 flex flex-col h-full">
                  <div className="mb-6 p-4 rounded-2xl bg-[var(--color-bg)] inline-block border border-[var(--color-primary)]/20 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-[var(--color-text-main)]/60 leading-relaxed text-sm">{service.desc}</p>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[80px]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-6 relative z-10">
              {t('home.cta.heading')}
            </h2>
            <p className="text-[var(--color-text-main)]/70 text-base md:text-lg mb-8 max-w-xl mx-auto relative z-10">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link
                to={lp('/contact')}
                data-magnetic
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold tracking-wide hover:bg-[var(--color-secondary)] transition-colors duration-300"
              >
                {t('home.cta.button')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
