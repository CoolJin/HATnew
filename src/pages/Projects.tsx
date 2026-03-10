import { motion } from 'motion/react';

// Placeholder images for project gallery
const projects = [
  {
    title: "Montageanlage Automotive",
    category: "Sondermaschinenbau",
    desc: "Vollautomatische Montagestation für Pkw-Komponenten mit integrierter Qualitätsprüfung.",
  },
  {
    title: "Verpackungsautomat Konsumgüter",
    category: "Verpackungsmaschinen",
    desc: "Hochgeschwindigkeits-Verpackungsmaschine für Konsumgüter mit flexiblem Formatwechsel.",
  },
  {
    title: "SPS-Retrofit Produktionslinie",
    category: "Retrofit",
    desc: "Modernisierung einer 15 Jahre alten Produktionslinie – neue Siemens S7-Steuerung, neue HMI.",
  },
  {
    title: "Prüfautomat Medizintechnik",
    category: "Sondermaschinenbau",
    desc: "Sensorbasierter Prüfautomat für medizinische Kleinteile mit hoher Präzision und Protokollierung.",
  },
  {
    title: "Schaltschrankbau Werkzeugmaschine",
    category: "Steuerungsbau",
    desc: "Kompletter Schaltschrankbau inkl. Programmierung und Inbetriebnahme für eine CNC-Bearbeitungsmaschine.",
  },
  {
    title: "Zuführsystem Elektronikmontage",
    category: "Sondermaschinenbau",
    desc: "Vibrations-Zuführsystem mit Sichtprüfung für die automatische Bestückung elektronischer Bauteile.",
  },
];

const categoryColors: Record<string, string> = {
  "Sondermaschinenbau": "text-[var(--color-primary)] border-[var(--color-primary)]/30",
  "Verpackungsmaschinen": "text-[var(--color-secondary)] border-[var(--color-secondary)]/30",
  "Retrofit": "text-emerald-400 border-emerald-400/30",
  "Steuerungsbau": "text-blue-400 border-blue-400/30",
};

export function Projects() {
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
            Ausgewählte <span className="text-gradient">Projekte</span>
          </h1>
          <p className="text-xl text-[var(--color-text-main)]/70 leading-relaxed">
            Ein Einblick in unsere realisierten Projekte aus den Bereichen Sondermaschinenbau,
            Retrofit, Steuerungsbau und Verpackungstechnik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group cursor-default"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-[var(--color-primary)]/10 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-surface)] group-hover:border-[var(--color-primary)]/30 transition-colors duration-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-2xl border-2 border-[var(--color-primary)] flex items-center justify-center mb-3">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-text-main)]">Projektfoto</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--color-bg)]/0 group-hover:bg-[var(--color-bg)]/10 transition-colors duration-500" />
              </div>

              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-main)]/60 leading-relaxed text-sm">
                    {project.desc}
                  </p>
                </div>
                <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border shrink-0 ${categoryColors[project.category] ?? 'text-[var(--color-text-main)] border-white/20'}`}>
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
