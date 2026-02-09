import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categoryOrder, getServicesByCategory } from '../data/services';
import { useLanguage } from '../context/LanguageContext';

interface ServicesDropdownProps {
    isActive: boolean;
    label: string;
    /** Called when a link is clicked (for mobile menu close) */
    onLinkClick?: () => void;
    /** If true, renders an expanded mobile-friendly version */
    mobile?: boolean;
}

export function ServicesDropdown({ isActive, label, onLinkClick, mobile }: ServicesDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const { t } = useLanguage();
    const location = useLocation();

    const serviceItems = t.services.items as Record<string, { title: string }>;

    // Close on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Close on clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on Escape
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') setIsOpen(false);
        }
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen]);

    const handleMouseEnter = () => {
        if (mobile) return;
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        if (mobile) return;
        timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
    };

    // — Mobile version —
    if (mobile) {
        return (
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-primary bg-primary/5' : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
                        }`}
                >
                    <span>{label}</span>
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                {isOpen && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-gold/30 pl-4 pb-2">
                        {/* All Services link */}
                        <Link
                            to="/services"
                            onClick={onLinkClick}
                            className="block px-3 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                        >
                            {t.serviceDetail?.allServices ?? '→ All Services'}
                        </Link>
                        {categoryOrder.map((cat) => {
                            const catServices = getServicesByCategory(cat.key);
                            const categoryLabel = t.services[cat.labelKey as keyof typeof t.services] as string;
                            return (
                                <div key={cat.key} className="pt-2">
                                    <span className="block px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                                        {categoryLabel}
                                    </span>
                                    {catServices.map((s) => (
                                        <Link
                                            key={s.slug}
                                            to={`/services/${s.slug}`}
                                            onClick={onLinkClick}
                                            className="block px-3 py-1.5 text-sm text-neutral-600 hover:text-primary transition-colors"
                                        >
                                            {serviceItems[s.itemKey]?.title ?? s.slug}
                                        </Link>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }

    // — Desktop version —
    return (
        <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-primary bg-primary/5' : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
                    }`}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span>{label}</span>
                <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Panel */}
            <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${isOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
            >
                <div className="bg-white rounded-2xl shadow-xl border border-gold/20 p-6 min-w-[600px]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
                        <h3 className="text-sm font-serif font-bold text-primary">{t.services.title}</h3>
                        <Link
                            to="/services"
                            onClick={onLinkClick}
                            className="text-xs font-medium text-secondary hover:text-primary transition-colors"
                        >
                            {t.serviceDetail?.viewAll ?? 'View All →'}
                        </Link>
                    </div>

                    {/* Category Columns */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {categoryOrder.map((cat) => {
                            const catServices = getServicesByCategory(cat.key);
                            const categoryLabel = t.services[cat.labelKey as keyof typeof t.services] as string;
                            return (
                                <div key={cat.key}>
                                    <span className="block text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                                        {categoryLabel}
                                    </span>
                                    <div className="space-y-1">
                                        {catServices.map((s) => {
                                            const SIcon = s.icon;
                                            return (
                                                <Link
                                                    key={s.slug}
                                                    to={`/services/${s.slug}`}
                                                    onClick={() => { setIsOpen(false); onLinkClick?.(); }}
                                                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-neutral-50 group transition-colors"
                                                >
                                                    <SIcon className="w-4 h-4 text-neutral-400 group-hover:text-secondary transition-colors flex-shrink-0" />
                                                    <span className="text-sm text-neutral-700 group-hover:text-primary transition-colors">
                                                        {serviceItems[s.itemKey]?.title ?? s.slug}
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
