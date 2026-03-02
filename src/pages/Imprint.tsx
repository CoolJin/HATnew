import { motion } from 'motion/react';

export function Imprint() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
            Impressum
          </h1>
          
          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">Angaben gemäß § 5 TMG</h2>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                TechVision GmbH<br />
                Innovationspark 1<br />
                10115 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">Vertreten durch</h2>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Max Mustermann (Geschäftsführer)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">Kontakt</h2>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Telefon: +49 (0) 123 456 789<br />
                E-Mail: hello@techvision.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">Registereintrag</h2>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Berlin (Charlottenburg)<br />
                Registernummer: HRB 123456 B
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">Umsatzsteuer-ID</h2>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE 123 456 789
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">Haftungsausschluss (Disclaimer)</h2>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                <strong>Haftung für Inhalte</strong><br />
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
