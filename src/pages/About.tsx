import { motion } from 'motion/react';
import { Users, Target, Zap } from 'lucide-react';

export function About() {
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
            Über <span className="text-gradient">Heinze AT</span>
          </h1>
          <p className="text-xl text-[var(--color-text-main)]/70 leading-relaxed">
            Wir sind ein Unternehmen im Bereich Automatisierungs- und Sondermaschinenbau. Durch die langjährige Erfahrung und überschaubare Struktuierung sind hohe Qualität, Flexibilität und Zuverlässigkeit bei unseren Projekten immer inklusive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            {
              icon: <Users size={40} className="text-[var(--color-primary)]" />,
              title: "Erfahrung",
              desc: "Langjährige Expertise in der Entwicklung und Produktion von Komponenten, Maschinen und Anlagen."
            },
            {
              icon: <Target size={40} className="text-[var(--color-secondary)]" />,
              title: "Qualität",
              desc: "Hohe Qualitätsstandards und Zuverlässigkeit bei all unseren Projekten."
            },
            {
              icon: <Zap size={40} className="text-[var(--color-primary)]" />,
              title: "Flexibilität",
              desc: "Maßgeschneiderte Komplettlösungen von der Konstruktion bis zur Inbetriebnahme."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-[var(--color-primary)]/[0.05] border border-[var(--color-primary)]/[0.1] inline-block group-hover:bg-[var(--color-primary)]/[0.1] transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery / Team representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-video rounded-3xl overflow-hidden relative"
          >
            <img
              src="http://heinze-at.de/index_htm_files/1586.jpg"
              alt="Sondermaschinenbau"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold">Sondermaschinenbau</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square md:aspect-video rounded-3xl overflow-hidden relative"
          >
            <img
              src="http://heinze-at.de/index_htm_files/1588.jpg"
              alt="Retrofit"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold">Retrofit</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
