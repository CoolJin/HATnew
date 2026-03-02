import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Plattform",
    category: "Web Development",
    image: "https://picsum.photos/seed/ecommerce/1200/800",
    desc: "Eine hochskalierbare Shop-Lösung mit Next.js und Stripe."
  },
  {
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/dashboard/1200/800",
    desc: "Komplexe Datenvisualisierung für ein modernes Finanz-Startup."
  },
  {
    title: "Corporate Website",
    category: "Branding & Web",
    image: "https://picsum.photos/seed/corporate/1200/800",
    desc: "Rebranding und Neuentwicklung einer internationalen Agentur."
  },
  {
    title: "Mobile App",
    category: "App Development",
    image: "https://picsum.photos/seed/mobileapp/1200/800",
    desc: "Eine Fitness-App mit Echtzeit-Tracking und Social Features."
  }
];

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
            Ein Einblick in unsere jüngsten Arbeiten. Wir kombinieren Ästhetik mit funktionaler Exzellenz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--color-bg)]/40 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 right-6 w-12 h-12 bg-[var(--color-primary)]/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="text-[var(--color-primary)]" />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-main)]/70">{project.desc}</p>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-primary)] px-3 py-1 rounded-full border border-[var(--color-primary)]/30">
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
