import { motion } from 'motion/react';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 backdrop-blur-sm text-sm font-medium tracking-wide text-[var(--color-text-main)]"
          >
            Willkommen in der Zukunft
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
          >
            Ihr Partner für <br />
            <span className="text-gradient">Automatisierung</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-[var(--color-text-main)]/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Seit mehreren Jahren haben wir die Erfahrung in Entwicklung und Produktion von Komponenten, Maschinen und Anlagen für Montage- und Prozessautomation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold tracking-wide hover:bg-[var(--color-secondary)] transition-colors"
            >
              Unsere Projekte
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full font-semibold tracking-wide border border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10 transition-colors text-[var(--color-text-main)]"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[var(--color-surface)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="text-[var(--color-primary)]" size={32} />,
                title: "Sondermaschinenbau",
                desc: "Montagemaschinen, Prüfstationen und Vereinzelungssysteme nach Maß."
              },
              {
                icon: <Code className="text-[var(--color-secondary)]" size={32} />,
                title: "Steuerungsbau",
                desc: "Auslegung, Aufbau und Programmierung von Steuerungskomponenten."
              },
              {
                icon: <Globe className="text-[var(--color-primary)]" size={32} />,
                title: "Retrofit",
                desc: "Mechanischer und elektrischer Umbau sowie Modernisierung von Maschinen."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-[var(--color-primary)]/[0.02] border border-[var(--color-primary)]/[0.1] hover:bg-[var(--color-primary)]/[0.05] transition-colors"
              >
                <div className="mb-6 p-4 rounded-2xl bg-[var(--color-bg)] inline-block border border-[var(--color-primary)]/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[var(--color-text-main)]/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
