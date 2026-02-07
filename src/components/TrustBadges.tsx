import { Award, Shield, Star, Users } from 'lucide-react';

export function TrustBadges() {
    const badges = [
        {
            icon: Shield,
            title: 'Certificat ISO 9001',
            description: 'Standarde Internaționale de Calitate',
        },
        {
            icon: Award,
            title: 'Colegiul Medicilor Dentiști',
            description: 'Membru Acreditat',
        },
        {
            icon: Star,
            title: 'Premii de Excelență',
            description: '15+ Premii Naționale și Internaționale',
        },
        {
            icon: Users,
            title: '10,000+ Pacienți',
            description: 'Mulțumiți de Serviciile Noastre',
        },
    ];

    return (
        <div className="bg-gradient-to-br from-beige to-cream py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                        Încredere și Excelență
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Certificări și recunoașteri care garantează cele mai înalte standarde de îngrijire dentară
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
                    <div className="animate-fade-in-up animation-delay-400">
                        <div className="text-4xl font-bold text-primary mb-2">15+</div>
                        <div className="text-sm text-neutral-600">Ani de Experiență</div>
                    </div>
                    <div className="animate-fade-in-up animation-delay-500">
                        <div className="text-4xl font-bold text-primary mb-2">98%</div>
                        <div className="text-sm text-neutral-600">Rată de Satisfacție</div>
                    </div>
                    <div className="animate-fade-in-up animation-delay-600">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-sm text-neutral-600">Suport de Urgență</div>
                    </div>
                    <div className="animate-fade-in-up animation-delay-600">
                        <div className="text-4xl font-bold text-primary mb-2">100%</div>
                        <div className="text-sm text-neutral-600">Echipament Sterilizat</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
