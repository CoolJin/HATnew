import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-primary)]/10 bg-[var(--color-bg)]/50 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold tracking-tighter">
              HEINZE<span className="text-gradient">AT</span>
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-main)]/60 max-w-xs leading-relaxed">
              Ihr kompetenter Partner für Automatisierung, Montage- und Prozesssysteme.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-main)] mb-4">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-[var(--color-text-main)]/60 hover:text-[var(--color-primary)] transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-[var(--color-text-main)]/60 hover:text-[var(--color-primary)] transition-colors">
                  Projekte
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-[var(--color-text-main)]/60 hover:text-[var(--color-primary)] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-main)] mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/imprint" className="text-sm text-[var(--color-text-main)]/60 hover:text-[var(--color-primary)] transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-[var(--color-text-main)]/60 hover:text-[var(--color-primary)] transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--color-primary)]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-text-main)]/40">
          <p>© {new Date().getFullYear()} Heinze Automatisierungstechnik. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/hat.heinzeautomatisierungstechnik/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">Facebook</a>
            <a href="https://www.instagram.com/hat_automatisierung/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
