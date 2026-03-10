import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '@/hooks/useLangPath';
import logoUrl from '../assets/HAT Heinze _17032015_1OHNELINK.png';

export function Footer() {
  const { t } = useTranslation();
  const lp = useLangPath();

  return (
    <footer className="border-t border-[var(--color-primary)]/10 bg-[var(--color-bg)]/50 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to={lp('/')} className="inline-block mb-4">
              <img src={logoUrl} alt="Heinze Automatisierungstechnik Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-[var(--color-text-main)]/50 font-medium mb-2">
              Heinze Automatisierungstechnik
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-main)]/40 max-w-xs leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="mt-4 text-sm text-[var(--color-text-main)]/40 space-y-1">
              <p>{t('footer.address')}</p>
              <a href="tel:+4971764521000" data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block hover:text-[var(--color-primary)] transition-colors py-1.5 px-4 -ml-4 rounded-full">07176 / 452100</a>
              <a href="mailto:info@heinze-at.de" data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block hover:text-[var(--color-primary)] transition-colors py-1.5 px-4 -ml-4 rounded-full">info@heinze-at.de</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-main)] mb-4">
              {t('footer.nav.services')}
            </h3>
            <ul className="space-y-3">
              {[
                { label: t('leistungen.items.sondermaschinenbau.title'), path: lp('/services/special-machinery') },
                { label: t('leistungen.items.verpackungsmaschinen.title'), path: lp('/services/packaging-machines') },
                { label: t('leistungen.items.retrofit.title'), path: lp('/services/retrofit') },
                { label: t('leistungen.items.steuerungsbau.title'), path: lp('/services/control-engineering') },
                { label: t('leistungen.items.dienstleistungen-mechanik.title', { defaultValue: t('leistungen.items.dienstleistungenMechanik.title') }), path: lp('/services/mechanical-services') },
                { label: t('leistungen.items.dienstleistungen-elektrik.title', { defaultValue: t('leistungen.items.dienstleistungenElektrik.title') }), path: lp('/services/electrical-services') },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block text-sm text-[var(--color-text-main)]/40 hover:text-[var(--color-primary)] transition-colors py-1.5 px-3 -ml-3 rounded-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-main)] mb-4">
              {t('footer.nav.company')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to={lp('/')} data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block text-sm text-[var(--color-text-main)]/40 hover:text-[var(--color-primary)] transition-colors py-1.5 px-3 -ml-3 rounded-full">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to={lp('/services')} data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block text-sm text-[var(--color-text-main)]/40 hover:text-[var(--color-primary)] transition-colors py-1.5 px-3 -ml-3 rounded-full">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to={lp('/projects')} data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block text-sm text-[var(--color-text-main)]/40 hover:text-[var(--color-primary)] transition-colors py-1.5 px-3 -ml-3 rounded-full">
                  {t('footer.nav.projects')}
                </Link>
              </li>
              <li>
                <Link to={lp('/about')} data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block text-sm text-[var(--color-text-main)]/40 hover:text-[var(--color-primary)] transition-colors py-1.5 px-3 -ml-3 rounded-full">
                  {t('footer.nav.about')}
                </Link>
              </li>
              <li>
                <Link to={lp('/contact')} data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block text-sm text-[var(--color-text-main)]/40 hover:text-[var(--color-primary)] transition-colors py-1.5 px-3 -ml-3 rounded-full">
                  {t('footer.nav.contact')}
                </Link>
              </li>
              <li>
                <Link to={lp('/imprint')} data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block text-sm text-[var(--color-text-main)]/40 hover:text-[var(--color-primary)] transition-colors py-1.5 px-3 -ml-3 rounded-full">
                  {t('footer.nav.imprint')}
                </Link>
              </li>
              <li>
                <Link to={lp('/privacy')} data-magnetic data-magnetic-factor="0" data-magnetic-padding="2" className="inline-block text-sm text-[var(--color-text-main)]/40 hover:text-[var(--color-primary)] transition-colors py-1.5 px-3 -ml-3 rounded-full">
                  {t('footer.nav.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-primary)]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-text-main)]/30">
          <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex space-x-2 mt-4 md:mt-0 relative left-4">
            <a href="https://www.facebook.com/hat.heinzeautomatisierungstechnik/" target="_blank" rel="noopener noreferrer" data-magnetic data-magnetic-factor="0" data-magnetic-padding="0" className="px-4 py-2 hover:text-[var(--color-primary)] transition-colors rounded-full">Facebook</a>
            <a href="https://www.instagram.com/hat_automatisierung/" target="_blank" rel="noopener noreferrer" data-magnetic data-magnetic-factor="0" data-magnetic-padding="0" className="px-4 py-2 hover:text-[var(--color-primary)] transition-colors rounded-full">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
