import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SUPPORTED_LANGS = ['de', 'en', 'ru'];

export function Layout() {
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  // Sync URL lang segment → i18next
  useEffect(() => {
    if (lang && SUPPORTED_LANGS.includes(lang) && i18n.resolvedLanguage !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-white font-sans selection:bg-[var(--color-primary)] selection:text-black">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
