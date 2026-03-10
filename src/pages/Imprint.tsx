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

          <div className="space-y-10">
            <section className="p-8 rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/[0.02]">
              <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-main)]">Angaben gemäß § 5 TMG</h2>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Heinze Automatisierungstechnik<br />
                Hauptstraße 5<br />
                73577 Ruppertshofen<br />
                Deutschland
              </p>
            </section>

            <section className="p-8 rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/[0.02]">
              <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-main)]">Kontakt</h2>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Telefon: <a href="tel:+4971766099" className="text-[var(--color-primary)] hover:underline">07176 / 6099</a><br />
                Mobil: <a href="tel:+491726048988" className="text-[var(--color-primary)] hover:underline">0172 / 6048988</a><br />
                Fax: 07176 / 6100<br />
                E-Mail: <a href="mailto:info@heinze-at.de" className="text-[var(--color-primary)] hover:underline">info@heinze-at.de</a>
              </p>
            </section>

            <section className="p-8 rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/[0.02]">
              <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-main)]">Umsatzsteuer-ID</h2>
              <p className="text-[var(--color-text-main)]/70 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE 241 059 510
              </p>
            </section>

            <section className="p-8 rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/[0.02]">
              <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-main)]">Haftungsausschluss</h2>
              <div className="space-y-4 text-[var(--color-text-main)]/70 leading-relaxed">
                <div>
                  <strong className="text-[var(--color-text-main)]">Haftung für Inhalte</strong>
                  <p className="mt-2">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                    verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                    zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>
                <div>
                  <strong className="text-[var(--color-text-main)]">Haftung für Links</strong>
                  <p className="mt-2">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
                <div>
                  <strong className="text-[var(--color-text-main)]">Urheberrecht</strong>
                  <p className="mt-2">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                    Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                    schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
