/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Leistungen } from './pages/Leistungen';
import { LeistungDetail } from './pages/LeistungDetail';
import { Contact } from './pages/Contact';
import { Imprint } from './pages/Imprint';
import { Privacy } from './pages/Privacy';
import { MagneticCursor } from './components/ui/magnetic-cursor';

function AppContent() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const detectedLang = i18n.resolvedLanguage ?? 'de';
  const lang = ['de', 'en', 'ru'].includes(detectedLang) ? detectedLang : 'de';

  return (
    <MagneticCursor
      cursorSize={28}
      blendMode="exclusion"
      cursorColor="white"
      magneticFactor={0.4}
      lerpAmount={0.12}
      hoverPadding={10}
      resetKey={location.pathname}
    >
      <Routes>
        {/* Redirect bare "/" to detected language */}
        <Route path="/" element={<Navigate to={`/${lang}`} replace />} />

        {/* All language-prefixed routes */}
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Leistungen />} />
          <Route path="services/:id" element={<LeistungDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="imprint" element={<Imprint />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
      </Routes>
    </MagneticCursor>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
