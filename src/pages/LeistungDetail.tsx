import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Factory, Cpu, RefreshCw, Package, Wrench, Zap } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '@/hooks/useLangPath';
import { leistungenData } from './Leistungen';

const iconMap: Record<string, React.ReactNode> = {
    Factory: <Factory size={36} className="text-[var(--color-primary)]" />,
    Package: <Package size={36} className="text-[var(--color-secondary)]" />,
    RefreshCw: <RefreshCw size={36} className="text-[var(--color-primary)]" />,
    Cpu: <Cpu size={36} className="text-[var(--color-secondary)]" />,
    Wrench: <Wrench size={36} className="text-[var(--color-primary)]" />,
    Zap: <Zap size={36} className="text-[var(--color-secondary)]" />,
};

export function LeistungDetail() {
    const { id } = useParams<{ id: string }>();
    const item = leistungenData.find(l => l.id === id);

    const { t } = useTranslation();
    const lp = useLangPath();

    const detailObject = t('leistungDetail.content', { returnObjects: true }) as Record<string, { flowText: string, sections: { heading: string, items: string[] }[] }>;
    const detail = id ? detailObject[id] : undefined;

    if (!item || !detail) return <Navigate to={lp('/services')} replace />;

    // Find prev/next for navigation
    const idx = leistungenData.findIndex(l => l.id === id);
    const prev = leistungenData[idx - 1];
    const next = leistungenData[idx + 1];

    return (
        <div className="w-full min-h-screen pt-32 pb-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm text-[var(--color-text-main)]/40 mb-12"
                >
                    <Link
                        to={lp('/services')}
                        data-magnetic
                        data-magnetic-factor="0"
                        data-magnetic-padding="2"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 -ml-3 rounded-full hover:text-[var(--color-primary)] transition-colors"
                    >
                        <ArrowLeft size={14} />
                        {t('leistungDetail.back')}
                    </Link>
                    <span>/</span>
                    <span className="text-[var(--color-text-main)]/70">{t(item.titleKey)}</span>
                </motion.div>

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-5 mb-6">
                        <div className="p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-primary)]/20 shrink-0">
                            {iconMap[item.iconKey]}
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-1">
                                {t(item.taglineKey)}
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter break-words md:break-normal hyphens-auto md:hyphens-none">
                                {t(item.titleKey)}
                            </h1>
                        </div>
                    </div>

                    {/* Flow text */}
                    <p className="text-lg md:text-xl text-[var(--color-text-main)]/70 leading-relaxed border-l-2 border-[var(--color-primary)]/40 pl-6 mt-8">
                        {detail.flowText}
                    </p>
                </motion.div>

                {/* Detail Sections */}
                <div className="space-y-12">
                    {detail.sections.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 md:p-10 rounded-3xl border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/[0.02]"
                        >
                            <h2 className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-6">
                                {section.heading}
                            </h2>
                            <ul className={`gap-3 ${section.items.length > 6 ? 'grid grid-cols-1 md:grid-cols-2' : 'flex flex-col'}`}>
                                {section.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-[var(--color-text-main)]/75 text-sm leading-relaxed">
                                        <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 md:p-10 rounded-3xl border border-[var(--color-primary)]/15 bg-gradient-to-br from-[var(--color-primary)]/8 to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                    <div>
                        <h3 className="text-2xl font-bold tracking-tighter mb-2">{t('leistungDetail.contact.heading')}</h3>
                        <p className="text-[var(--color-text-main)]/60 text-sm">
                            {t('leistungDetail.contact.subtitle')}
                        </p>
                    </div>
                    <Link
                        to={lp('/contact')}
                        data-magnetic
                        className="group flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white rounded-full font-semibold text-sm hover:bg-[var(--color-secondary)] transition-colors duration-300 shrink-0"
                    >
                        {t('leistungDetail.contact.button')}
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Prev / Next navigation */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prev ? (
                        <Link
                            to={lp(`/services/${prev.id}`)}
                            data-magnetic
                            data-magnetic-factor="0.1"
                            data-magnetic-padding="4"
                            className="group flex items-center gap-3 p-5 rounded-2xl border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 transition-colors"
                        >
                            <ArrowLeft size={18} className="text-[var(--color-primary)] group-hover:-translate-x-1 transition-transform shrink-0" />
                            <div>
                                <p className="text-xs text-[var(--color-text-main)]/40 mb-0.5 whitespace-nowrap">← {t('leistungDetail.prev')}</p>
                                <p className="font-semibold text-sm">{t(prev.titleKey)}</p>
                            </div>
                        </Link>
                    ) : <div />}

                    {next && (
                        <Link
                            to={lp(`/services/${next.id}`)}
                            data-magnetic
                            data-magnetic-factor="0.1"
                            data-magnetic-padding="4"
                            className="group flex items-center justify-end gap-3 p-5 rounded-2xl border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 transition-colors text-right"
                        >
                            <div className="text-right">
                                <p className="text-xs text-[var(--color-text-main)]/40 mb-0.5 whitespace-nowrap">{t('leistungDetail.next')} →</p>
                                <p className="font-semibold text-sm">{t(next.titleKey)}</p>
                            </div>
                            <ArrowRight size={18} className="text-[var(--color-primary)] group-hover:translate-x-1 transition-transform shrink-0" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
