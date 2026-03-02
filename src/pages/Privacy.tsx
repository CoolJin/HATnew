import { motion } from 'motion/react';

export function Privacy() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
            Datenschutzerklärung
          </h1>
          
          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-medium mb-2 text-[var(--color-text-main)]/80">Allgemeine Hinweise</h3>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-xl font-medium mb-2 text-[var(--color-text-main)]/80">Datenschutz</h3>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed mt-4">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-xl font-medium mb-2 text-[var(--color-text-main)]/80">Cookies</h3>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">4. Plugins und Tools</h2>
              <h3 className="text-xl font-medium mb-2 text-[var(--color-text-main)]/80">Web Fonts</h3>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
