import { Award, Shield, Star, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function TrustBadges() {
    const { t } = useLanguage();

    const icons = [Shield, Award, Star, Users];
    const badges = t.trustBadges?.items.map((item, index) => ({
        icon: icons[index] || Shield,
        title: item.title,
        description: item.description,
    })) || [];

    return (
        <div className="bg-gradient-to-br from-beige to-cream py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                        {t.trustBadges?.title}
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        {t.trustBadges?.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={index}
                                className="premium-card p-8 text-center hover-lift animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-gradient-to-br from-gold/20 to-sage/20 p-4 rounded-2xl">
                                        <Icon className="w-8 h-8 text-gold" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-2">
                                    {badge.title}
                                </h3>
                                <p className="text-sm text-neutral-600">
                                    {badge.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Trust Signals */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {t.trustBadges?.stats.map((stat, index) => (
                        <div key={index} className={`animate-fade-in-up animation-delay-${(index + 4) * 100}`}>
                            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-sm text-neutral-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
