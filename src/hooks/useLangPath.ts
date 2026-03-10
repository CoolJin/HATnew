import { useParams } from 'react-router-dom';

/**
 * Returns a function that prepends the current language prefix to a path.
 * Usage: const lp = useLangPath(); <Link to={lp('/services')}>
 */
export function useLangPath() {
    const { lang } = useParams<{ lang: string }>();
    const validLang = ['de', 'en', 'ru'].includes(lang ?? '') ? (lang as string) : 'de';

    return (path: string) => {
        // Remove leading slash from path to avoid double slashes
        const clean = path.startsWith('/') ? path.slice(1) : path;
        return clean ? `/${validLang}/${clean}` : `/${validLang}`;
    };
}
