import { Home, Wrench, FolderKanban, Users, Mail } from 'lucide-react';
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '@/hooks/useLangPath';

export function Navbar() {
  const { t } = useTranslation();
  const lp = useLangPath();

  const navItems = [
    { name: t('nav.home'), url: lp('/'), icon: Home },
    { name: t('nav.services'), url: lp('/services'), icon: Wrench },
    { name: t('nav.projects'), url: lp('/projects'), icon: FolderKanban },
    { name: t('nav.about'), url: lp('/about'), icon: Users },
    { name: t('nav.contact'), url: lp('/contact'), icon: Mail },
  ];

  return (
    <TubelightNavbar
      items={navItems}
      ctaLabel={t('nav.contact')}
      ctaUrl={lp('/contact')}
    />
  );
}
