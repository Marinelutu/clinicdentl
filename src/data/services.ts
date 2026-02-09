import {
    Sparkles,
    Circle,
    Shield,
    Star,
    Heart,
    Wrench,
    AlertCircle,
    Zap,
    type LucideIcon,
} from 'lucide-react';

export type ServiceCategory = 'preventive' | 'cosmetic' | 'restorative' | 'emergency';

export interface Service {
    slug: string;
    icon: LucideIcon;
    category: ServiceCategory;
    /** Key into translations.services.items */
    itemKey: string;
    /** Image path for the hero banner */
    image: string;
}

export const services: Service[] = [
    // — Preventive —
    {
        slug: 'dental-exams',
        icon: Sparkles,
        category: 'preventive',
        itemKey: 'exam',
        image: '/images/services/exam.png',
    },
    {
        slug: 'professional-cleaning',
        icon: Circle,
        category: 'preventive',
        itemKey: 'cleaning',
        image: '/images/services/cleaning.png',
    },
    {
        slug: 'preventive-care',
        icon: Shield,
        category: 'preventive',
        itemKey: 'prevention',
        image: '/images/services/prevention.png',
    },

    // — Cosmetic —
    {
        slug: 'teeth-whitening',
        icon: Star,
        category: 'cosmetic',
        itemKey: 'whitening',
        image: '/images/services/whitening.png',
    },
    {
        slug: 'porcelain-veneers',
        icon: Sparkles,
        category: 'cosmetic',
        itemKey: 'veneers',
        image: '/images/services/veneers.png',
    },
    {
        slug: 'smile-makeover',
        icon: Heart,
        category: 'cosmetic',
        itemKey: 'makeover',
        image: '/images/services/makeover.png',
    },

    // — Restorative —
    {
        slug: 'dental-implants',
        icon: Wrench,
        category: 'restorative',
        itemKey: 'implants',
        image: '/images/services/implants.png',
    },
    {
        slug: 'crowns-and-bridges',
        icon: Shield,
        category: 'restorative',
        itemKey: 'crowns',
        image: '/images/services/crowns.png',
    },
    {
        slug: 'root-canal',
        icon: Circle,
        category: 'restorative',
        itemKey: 'rootcanal',
        image: '/images/services/rootcanal.png',
    },

    // — Emergency —
    {
        slug: 'emergency-care',
        icon: AlertCircle,
        category: 'emergency',
        itemKey: 'emergency',
        image: '/images/services/emergency.png',
    },
    {
        slug: 'tooth-extraction',
        icon: Zap,
        category: 'emergency',
        itemKey: 'extraction',
        image: '/images/services/extraction.png',
    },
    {
        slug: 'trauma-care',
        icon: Shield,
        category: 'emergency',
        itemKey: 'trauma',
        image: '/images/services/trauma.png',
    },
];

/** Look up a service by its URL slug */
export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}

/** Get all services in a given category */
export function getServicesByCategory(category: ServiceCategory): Service[] {
    return services.filter((s) => s.category === category);
}

/** Category display order + translation key mapping */
export const categoryOrder: { key: ServiceCategory; labelKey: string }[] = [
    { key: 'preventive', labelKey: 'preventive' },
    { key: 'cosmetic', labelKey: 'cosmetic' },
    { key: 'restorative', labelKey: 'restorative' },
    { key: 'emergency', labelKey: 'emergency' },
];
