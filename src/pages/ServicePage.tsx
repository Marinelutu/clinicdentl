import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug, services } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import { ChevronDown, ChevronRight, Calendar, ArrowLeft, Check, Shield, Users, Award, Clock } from 'lucide-react';
import { useState } from 'react';

function ServiceFAQ({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-gold/40">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
            >
                <span className="font-medium text-primary pr-4">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-5 pb-5 text-neutral-600 leading-relaxed">{answer}</div>
            </div>
        </div>
    );
}

function InfoCard({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md hover:border-gold/30 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-primary-light/5 to-secondary-light/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-lg font-serif font-bold text-primary mb-2">{title}</h3>
            <p className="text-neutral-600 leading-relaxed text-sm">{text}</p>
        </div>
    );
}

export function ServicePage() {
    const { slug } = useParams<{ slug: string }>();
    const { t } = useLanguage();
    const { openBooking } = useBooking();

    const service = slug ? getServiceBySlug(slug) : undefined;

    if (!service) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
                    <p className="text-xl text-neutral-600 mb-8">{t.serviceDetail?.notFound ?? 'Service not found'}</p>
                    <Link
                        to="/services"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-sage to-sage/80 text-white px-6 py-3 rounded-lg font-medium hover:shadow-md transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>{t.serviceDetail?.backToServices ?? 'Back to Services'}</span>
                    </Link>
                </div>
            </div>
        );
    }

    const serviceItems = t.services.items as Record<string, {
        title: string;
        description: string;
        features: string[];
        price: string;
    }>;
    const item = serviceItems[service.itemKey];
    const detail = (t.serviceDetail?.services as Record<string, {
        whyTreatment: string;
        forWhom: string;
        guarantees: string;
        whyNotDelay: string;
        faqs: { q: string; a: string }[];
    }> | undefined)?.[service.itemKey];

    const Icon = service.icon;

    // Get related services (same category, excluding current)
    const relatedServices = services
        .filter((s) => s.category === service.category && s.slug !== service.slug)
        .slice(0, 2);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <img
                    src={service.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/20" />
                <div className="relative z-10 h-full flex items-end pb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <Link
                            to="/services"
                            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6 text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>{t.serviceDetail?.backToServices ?? 'Back to Services'}</span>
                        </Link>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                                <Icon className="w-8 h-8 text-white" />
                            </div>
                            <span className="bg-gold/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                {t.services[service.category as keyof typeof t.services] as string}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3">
                            {item.title}
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl">{item.description}</p>
                    </div>
                </div>
            </section>

            {/* Price Badge + Quick CTA */}
            <section className="bg-white border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-6">
                        <div>
                            <span className="text-sm text-neutral-500 block">{t.serviceDetail?.startingFrom ?? 'Starting from'}</span>
                            <span className="text-3xl font-bold text-secondary">{item.price}</span>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-neutral-200" />
                        <div className="hidden sm:flex items-center space-x-4">
                            {item.features.slice(0, 3).map((feature: string, idx: number) => (
                                <span key={idx} className="flex items-center space-x-1 text-sm text-neutral-600">
                                    <Check className="w-4 h-4 text-secondary" />
                                    <span>{feature}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={openBooking}
                        className="flex items-center space-x-2 bg-gradient-to-r from-sage to-sage/80 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover-lift transition-all shadow-sm"
                    >
                        <Calendar className="w-5 h-5" />
                        <span>{t.nav.bookOnline}</span>
                    </button>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
                        {t.serviceDetail?.whatIncluded ?? 'What\'s Included'}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {item.features.map((feature: string, idx: number) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-6 text-center shadow-sm border border-neutral-100 hover:border-secondary-light/50 hover:shadow-md transition-all group"
                            >
                                <div className="bg-gradient-to-br from-secondary-light/10 to-primary-light/5 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Check className="w-6 h-6 text-secondary" />
                                </div>
                                <p className="font-medium text-primary">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why / For Whom / Guarantees / Why Not Delay */}
            {detail && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <InfoCard
                                icon={Shield}
                                title={t.serviceDetail?.whyTreatmentTitle ?? 'Why This Treatment?'}
                                text={detail.whyTreatment}
                            />
                            <InfoCard
                                icon={Users}
                                title={t.serviceDetail?.forWhomTitle ?? 'Who Is This For?'}
                                text={detail.forWhom}
                            />
                            <InfoCard
                                icon={Award}
                                title={t.serviceDetail?.guaranteesTitle ?? 'Our Guarantees'}
                                text={detail.guarantees}
                            />
                            <InfoCard
                                icon={Clock}
                                title={t.serviceDetail?.whyNotDelayTitle ?? 'Why Not Delay?'}
                                text={detail.whyNotDelay}
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {detail?.faqs && detail.faqs.length > 0 && (
                <section className="py-16 bg-neutral-50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
                            {t.serviceDetail?.faqTitle ?? 'Frequently Asked Questions'}
                        </h2>
                        <div className="space-y-3">
                            {detail.faqs.map((faq: { q: string; a: string }, idx: number) => (
                                <ServiceFAQ key={idx} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Related Services */}
            {relatedServices.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
                            {t.serviceDetail?.relatedServices ?? 'Related Services'}
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {relatedServices.map((related) => {
                                const relatedItem = serviceItems[related.itemKey];
                                const RelIcon = related.icon;
                                return (
                                    <Link
                                        key={related.slug}
                                        to={`/services/${related.slug}`}
                                        className="group bg-neutral-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg border border-transparent hover:border-gold/20 transition-all duration-300"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-gradient-to-br from-primary-light/5 to-secondary-light/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <RelIcon className="w-6 h-6 text-secondary" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-serif font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                                                    {relatedItem.title}
                                                </h3>
                                                <p className="text-sm text-neutral-600 line-clamp-2">{relatedItem.description}</p>
                                                <div className="flex items-center space-x-1 mt-3 text-gold text-sm font-medium">
                                                    <span>{t.serviceDetail?.learnMore ?? 'Learn More'}</span>
                                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-br from-primary via-primary-light to-primary">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        {t.serviceDetail?.ctaTitle ?? 'Ready to Get Started?'}
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        {t.serviceDetail?.ctaSubtitle ?? 'Schedule your consultation today and take the first step toward a healthier smile.'}
                    </p>
                    <button
                        onClick={openBooking}
                        className="inline-flex items-center space-x-2 bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-xl transition-all shadow-md"
                    >
                        <Calendar className="w-5 h-5" />
                        <span>{t.nav.bookOnline}</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
