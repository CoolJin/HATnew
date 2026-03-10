import React from 'react';
import { motion } from 'motion/react';
import { Factory, Cpu, RefreshCw, Package, Wrench, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '@/hooks/useLangPath';
import { GlareCard } from '@/components/ui/glare-card';

export const leistungenData = [
    {
        id: 'special-machinery',
        iconKey: 'Factory',
        titleKey: 'leistungen.items.sondermaschinenbau.title',
        taglineKey: 'leistungen.items.sondermaschinenbau.tagline',
        summaryKey: 'leistungen.items.sondermaschinenbau.summary',
        highlightKeys: 'leistungen.items.sondermaschinenbau.highlights',
    },
    {
        id: 'packaging-machines',
        iconKey: 'Package',
        titleKey: 'leistungen.items.verpackungsmaschinen.title',
        taglineKey: 'leistungen.items.verpackungsmaschinen.tagline',
        summaryKey: 'leistungen.items.verpackungsmaschinen.summary',
        highlightKeys: 'leistungen.items.verpackungsmaschinen.highlights',
    },
    {
        id: 'retrofit',
        iconKey: 'RefreshCw',
        titleKey: 'leistungen.items.retrofit.title',
        taglineKey: 'leistungen.items.retrofit.tagline',
        summaryKey: 'leistungen.items.retrofit.summary',
        highlightKeys: 'leistungen.items.retrofit.highlights',
    },
    {
        id: 'control-engineering',
        iconKey: 'Cpu',
        titleKey: 'leistungen.items.steuerungsbau.title',
        taglineKey: 'leistungen.items.steuerungsbau.tagline',
        summaryKey: 'leistungen.items.steuerungsbau.summary',
        highlightKeys: 'leistungen.items.steuerungsbau.highlights',
    },
    {
        id: 'mechanical-services',
        iconKey: 'Wrench',
        titleKey: 'leistungen.items.dienstleistungenMechanik.title',
        taglineKey: 'leistungen.items.dienstleistungenMechanik.tagline',
        summaryKey: 'leistungen.items.dienstleistungenMechanik.summary',
        highlightKeys: 'leistungen.items.dienstleistungenMechanik.highlights',
    },
    {
        id: 'electrical-services',
        iconKey: 'Zap',
        titleKey: 'leistungen.items.dienstleistungenElektrik.title',
        taglineKey: 'leistungen.items.dienstleistungenElektrik.tagline',
        summaryKey: 'leistungen.items.dienstleistungenElektrik.summary',
        highlightKeys: 'leistungen.items.dienstleistungenElektrik.highlights',
    },
];

const iconMap: Record<string, React.ReactNode> = {
    Factory: <Factory size={36} className="text-[var(--color-primary)]" />,
    Package: <Package size={36} className="text-[var(--color-secondary)]" />,
    RefreshCw: <RefreshCw size={36} className="text-[var(--color-primary)]" />,
    Cpu: <Cpu size={36} className="text-[var(--color-secondary)]" />,
    Wrench: <Wrench size={36} className="text-[var(--color-primary)]" />,
    Zap: <Zap size={36} className="text-[var(--color-secondary)]" />,
};

export function Leistungen() {
    const { t } = useTranslation();
    const lp = useLangPath();

    return (
        <div className="w-full min-h-screen pt-28 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-20"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 md:mb-6">
                        {t('leistungen.heading')} <span className="text-gradient">{t('leistungen.headingHighlight')}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--color-text-main)]/60 leading-relaxed">
                        {t('leistungen.subtitle')}
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {leistungenData.map((item, i) => {
                        const highlights = t(item.highlightKeys, { returnObjects: true }) as string[];
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                            >
                                <GlareCard className="group flex flex-col p-6 md:p-8 rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/[0.02] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/[0.05] transition-all duration-300 h-full">
                                    {/* Icon */}
                                    <div className="mb-5 p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-primary)]/15 inline-block group-hover:scale-110 transition-transform duration-300">
                                        {iconMap[item.iconKey]}
                                    </div>

                                    {/* Title & tagline */}
                                    <h2 className="text-xl font-bold mb-1 break-words md:break-normal hyphens-auto md:hyphens-none">{t(item.titleKey)}</h2>
                                    <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4 font-semibold">
                                        {t(item.taglineKey)}
                                    </p>

                                    {/* Summary */}
                                    <p className="text-[var(--color-text-main)]/60 text-sm leading-relaxed mb-6 flex-1">
                                        {t(item.summaryKey)}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-1.5 mb-8">
                                        {Array.isArray(highlights) && highlights.map((h, j) => (
                                            <li key={j} className="flex items-center gap-2 text-xs text-[var(--color-text-main)]/50">
                                                <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        to={lp(`/services/${item.id}`)}
                                        data-magnetic
                                        data-magnetic-factor="0.1"
                                        data-magnetic-padding="2"
                                        className="group/btn relative z-10 flex items-center justify-between gap-2 w-full px-5 py-3 rounded-xl border border-[var(--color-primary)]/30 text-sm font-semibold text-[var(--color-text-main)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-bg)] transition-colors duration-300"
                                    >
                                        {t('leistungen.details')}
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </GlareCard>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 p-6 md:p-10 rounded-3xl border border-[var(--color-primary)]/15 bg-gradient-to-br from-[var(--color-primary)]/8 to-transparent text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-3">
                        {t('home.cta.heading')}
                    </h2>
                    <p className="text-[var(--color-text-main)]/60 mb-6 max-w-lg mx-auto text-sm md:text-base">
                        {t('home.cta.subtitle')}
                    </p>
                    <Link
                        to={lp('/contact')}
                        data-magnetic
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold hover:bg-[var(--color-secondary)] transition-colors duration-300"
                    >
                        {t('home.cta.button')}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
