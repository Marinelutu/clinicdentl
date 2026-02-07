import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { TrustSignals } from '../components/TrustSignals';
import { Sparkles, Shield, Wrench, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      titleKey: 'preventive',
      description: t.services.preventiveDesc,
      features: t.home.serviceFeatures?.preventive || [],
    },
    {
      icon: Shield,
      titleKey: 'cosmetic',
      description: t.services.cosmeticDesc,
      features: t.home.serviceFeatures?.cosmetic || [],
    },
    {
      icon: Wrench,
      titleKey: 'restorative',
      description: t.services.restorativeDesc,
      features: t.home.serviceFeatures?.restorative || [],
    },
    {
      icon: AlertCircle,
      titleKey: 'emergency',
      description: t.services.emergencyDesc,
      features: t.home.serviceFeatures?.emergency || [],
    },
  ];

  const testimonials = t.home.testimonials?.map(item => ({ ...item, rating: 5 })) || [];

  return (
    <div>
      <Hero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              {t.home.servicesTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={t.services[service.titleKey as keyof typeof t.services] as string}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-50 to-secondary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              {t.home.trustTitle}
            </h2>
          </div>

          <TrustSignals />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              {t.home.testimonialsTitle}
            </h2>
            <p className="text-neutral-500 italic">
              {t.home.testimonialsSubtitle}
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t.home.ready?.title}
          </h2>
          <p className="text-xl text-neutral-50 mb-8 leading-relaxed">
            {t.home.ready?.subtitle}
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-50 transition-all shadow-xl hover:shadow-2xl">
            {t.home.ready?.button}
          </button>
        </div>
      </section>
    </div>
  );
}
