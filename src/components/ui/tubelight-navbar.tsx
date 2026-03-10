"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { LucideIcon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { LanguageSelectorDropdown } from "./language-selector-dropdown";

interface NavItem {
    name: string;
    url: string;
    icon: LucideIcon;
}

interface TubelightNavbarProps {
    items: NavItem[];
    logo?: React.ReactNode;
    ctaLabel?: string;
    ctaUrl?: string;
    className?: string;
}

export function TubelightNavbar({
    items,
    logo,
    ctaLabel = "Anfrage",
    ctaUrl = "/contact",
    className,
}: TubelightNavbarProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const { lang } = useParams<{ lang: string }>();
    const { i18n } = useTranslation();
    const langs = ['de', 'en', 'ru'] as const;
    const currentLang = lang ?? i18n.resolvedLanguage ?? 'de';

    const matchActiveTab = (pathname: string) => {
        // 1. Exact match
        let matched = items.find((i) => i.url === pathname);
        // 2. Prefix match (for sub-routes like /de/services/123), ignoring the root url
        if (!matched) {
            matched = items.find((i) => i.url !== `/${currentLang}` && pathname.startsWith(i.url + '/'));
        }
        return matched?.name ?? items[0].name;
    };

    const [activeTab, setActiveTab] = useState(() => matchActiveTab(location.pathname));
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // On route change, update active tab
    useEffect(() => {
        setActiveTab(matchActiveTab(location.pathname));
    }, [location.pathname, items, currentLang]);

    // Switch language: replace the lang segment in the current URL
    const switchLang = (newLang: string) => {
        const segments = location.pathname.split('/').filter(Boolean);
        segments[0] = newLang; // replace lang segment
        navigate('/' + segments.join('/') + location.search);
    };

    // Scroll-based shrink/grow
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Floating pill navbar – top-1.5 keeps pill just off the viewport edge */}
            <motion.div
                initial={false}
                animate={scrolled ? "scrolled" : "top"}
                variants={{
                    top: { scale: 1 },
                    scrolled: { scale: 0.82 },
                }}
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 z-50 px-0",
                    className
                )}
            >
                <motion.div
                    animate={scrolled ? "scrolled" : "top"}
                    variants={{
                        top: {
                            backgroundColor: "rgba(10,2,2,0.45)",
                            borderColor: "rgba(255,51,51,0.12)",
                            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.2)",
                        },
                        scrolled: {
                            backgroundColor: "rgba(10,2,2,0.70)",
                            borderColor: "rgba(255,51,51,0.22)",
                            boxShadow: "0 8px 40px 0 rgba(0,0,0,0.45)",
                        },
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-3 rounded-full border px-5 py-3 backdrop-blur-md"
                >
                    {/* Logo slot – hidden for now, real image file coming later */}
                    {logo && (
                        <Link to="/" onClick={() => setActiveTab(items[0].name)} className="flex items-center gap-2 shrink-0 pl-1">
                            {logo}
                        </Link>
                    )}

                    {/* Desktop nav pills */}
                    <div className="hidden md:flex items-center gap-1">
                        {items.map((item) => {
                            const isActive = activeTab === item.name;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.url}
                                    data-magnetic
                                    onClick={() => setActiveTab(item.name)}
                                    className={cn(
                                        "relative px-6 py-2.5 rounded-full text-[15px] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap",
                                        isActive
                                            ? "text-[var(--color-text-main)]"
                                            : "text-[var(--color-text-main)]/55 hover:text-[var(--color-text-main)]/90"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="tubelight-pill"
                                            className="absolute inset-0 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20"
                                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                        >
                                            {/* Tube glow strip – BOTTOM */}
                                            <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-10 h-[3px] bg-[var(--color-primary)] rounded-b-full overflow-visible">
                                                <div className="absolute w-16 h-5 bg-[var(--color-primary)]/25 rounded-full blur-md top-0 -left-3" />
                                                <div className="absolute w-10 h-5 bg-[var(--color-primary)]/20 rounded-full blur-sm top-0" />
                                            </div>
                                        </motion.div>
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA + Mobile menu toggle */}
                    <div className="flex items-center gap-2 shrink-0">
                        {/* Language Switcher Dropdown */}
                        <LanguageSelectorDropdown
                            currentLang={currentLang as string}
                            onSwitch={switchLang}
                            className="hidden md:inline-block border-l border-[var(--color-primary)]/20 ml-1 pl-2"
                        />

                        <button
                            data-magnetic
                            onClick={() => setIsOpen((o) => !o)}
                            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-[var(--color-text-main)]/60 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </motion.div>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.97 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] max-w-[320px] rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-bg)]/95 backdrop-blur-xl overflow-hidden shadow-xl"
                        >
                            <div className="p-3 flex flex-col gap-1">
                                {items.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = activeTab === item.name;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.url}
                                            onClick={() => { setActiveTab(item.name); setIsOpen(false); }}
                                            className={cn(
                                                "min-h-[44px] flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                                isActive
                                                    ? "bg-[var(--color-primary)]/10 text-[var(--color-text-main)]"
                                                    : "text-[var(--color-text-main)]/60 hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-text-main)]/90"
                                            )}
                                        >
                                            <Icon size={17} strokeWidth={2} />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                                <div className="mt-2 pt-2 border-t border-[var(--color-primary)]/10">
                                    <div className="flex items-center justify-between px-2 pb-2 pt-1">
                                        <span className="text-sm font-medium text-[var(--color-text-main)]/60">Language / Sprache</span>
                                        <LanguageSelectorDropdown currentLang={currentLang as string} onSwitch={switchLang} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
