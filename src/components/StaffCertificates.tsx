import { Award, GraduationCap, Shield, Users2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function StaffCertificates() {
    const { t } = useLanguage();

    const staff = [
        {
            name: t.staff.drIonescu.name,
            role: t.staff.drIonescu.role,
            image: '/images/staff/dr-ionescu.png',
            bio: t.staff.drIonescu.bio
        },
        {
            name: t.staff.drPopescu.name,
            role: t.staff.drPopescu.role,
            image: '/images/staff/dr-popescu.png',
            bio: t.staff.drPopescu.bio
        },
        {
            name: t.staff.drGeorgescu.name,
            role: t.staff.drGeorgescu.role,
            image: '/images/staff/dr-georgescu.png',
            bio: t.staff.drGeorgescu.bio
        }
    ];

    const certificates = [
        {
            title: t.certificates.iso.title,
            description: t.certificates.iso.description,
            icon: Shield
        },
        {
            title: t.certificates.accreditation.title,
            description: t.certificates.accreditation.description,
            icon: GraduationCap
        },
        {
            title: t.certificates.award.title,
            description: t.certificates.award.description,
            icon: Award
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Staff Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-sage/10 text-sage border border-sage/30 px-4 py-2 rounded-md text-sm font-medium mb-4">
                            <Users2 className="w-4 h-4 inline mr-2" />
                            {t.staff.badge}
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                            {t.staff.title}
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            {t.staff.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {staff.map((member, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-primary mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sage font-medium mb-3">{member.role}</p>
                                    <p className="text-sm text-neutral-600 leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certificates Section */}
                <div>
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gold/10 text-gold border border-gold/30 px-4 py-2 rounded-md text-sm font-medium mb-4">
                            <Award className="w-4 h-4 inline mr-2" />
                            {t.certificates.badge}
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                            {t.certificates.title}
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            {t.certificates.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => {
                            const Icon = cert.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gold/10 hover:border-gold/30"
                                >
                                    <div className="bg-gradient-to-br from-gold/20 to-sage/20 p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className="w-8 h-8 text-gold" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                                        {cert.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed">{cert.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
