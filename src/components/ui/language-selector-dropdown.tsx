import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const languages = [
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
];

interface LanguageSelectorProps {
    currentLang: string;
    onSwitch: (lang: string) => void;
    className?: string;
}

export const LanguageSelectorDropdown = ({ currentLang, onSwitch, className }: LanguageSelectorProps) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        function handleScroll() {
            setOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const selected = languages.find(l => l.code === currentLang) || languages[0];

    return (
        <div className={cn("relative inline-block", className)} ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setOpen((o) => !o)}
                data-magnetic
                data-magnetic-factor="0.1"
                data-magnetic-padding="2"
                className={cn(
                    "flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[15px] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap",
                    open ? "text-[var(--color-text-main)]" : "text-[var(--color-text-main)]/55 hover:text-[var(--color-text-main)]/90"
                )}
            >
                <span>{selected.label}</span>
                <ChevronDown className={cn("h-3.5 w-3.5 ml-0.5 transition-transform duration-200", open ? "text-[var(--color-text-main)]" : "text-[var(--color-text-main)]/55")} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={cn(
                            "absolute right-0 mt-3 w-[160px] rounded-2xl overflow-hidden z-[100]",
                            "bg-[var(--color-bg)]/70 backdrop-blur-md", // Match navbar glass effect strictly
                            "shadow-[0_8px_30px_rgb(255,51,51,0.05)] border border-[var(--color-primary)]/20"
                        )}
                    >
                        <div className="p-1.5 flex flex-col gap-0.5">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    data-magnetic
                                    data-magnetic-factor="0.05"
                                    onClick={() => {
                                        onSwitch(lang.code);
                                        setOpen(false);
                                    }}
                                    className={cn(
                                        "flex items-center gap-2.5 w-full px-3 py-2 text-sm text-left transition-colors duration-200 rounded-full",
                                        currentLang === lang.code
                                            ? "font-semibold text-[var(--color-text-main)]"
                                            : "text-[var(--color-text-main)]/55 hover:text-[var(--color-text-main)]/90"
                                    )}
                                >
                                    <span className="text-lg leading-none">{lang.flag}</span>
                                    <span className="flex-1">{lang.label}</span>
                                    {currentLang === lang.code && (
                                        <Check className="h-4 w-4 text-[var(--color-text-main)] shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
