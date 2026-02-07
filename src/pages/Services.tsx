import { CTASection } from '../components/CTASection';
import { ServiceCard } from '../components/ServiceCard';
import {
  Sparkles,
  Shield,
  Wrench,
  AlertCircle,
  Star,
  Heart,
  Zap,
  Circle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const preventiveServices = [
    {
      icon: Sparkles,
      ...t.services.items.exam,
    },
    {
      icon: Circle,
      ...t.services.items.cleaning,
    },
    {
      icon: Shield,
      ...t.services.items.prevention,
    },
  ];

  const cosmeticServices = [
    {
      icon: Star,
      ...t.services.items.whitening,
    },
    {
      icon: Sparkles,
      ...t.services.items.veneers,
    },
    {
      icon: Heart,
      ...t.services.items.makeover,
    },
  ];

  const restorativeServices = [
    {
      icon: Wrench,
      ...t.services.items.implants,
    },
    {
      icon: Shield,
      ...t.services.items.crowns,
    },
    {
      icon: Circle,
      ...t.services.items.rootcanal,
    },
  ];

  const emergencyServices = [
    {
      icon: AlertCircle,
      ...t.services.items.emergency,
    },
    {
      icon: Zap,
      ...t.services.items.extraction,
    },
    {
      icon: Shield,
      ...t.services.items.trauma,
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-neutral-50 via-white to-secondary-light/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.services.preventive}
            </h2>
            <p className="text-lg text-neutral-600">
              {t.services.preventiveDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {preventiveServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.services.cosmetic}
            </h2>
            <p className="text-lg text-neutral-600">
              {t.services.cosmeticDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {cosmeticServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.services.restorative}
            </h2>
            <p className="text-lg text-neutral-600">
              {t.services.restorativeDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {restorativeServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.services.emergency}
            </h2>
            <p className="text-lg text-neutral-600">
              {t.services.emergencyDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t.ctaSection.title}
        subtitle={t.ctaSection.subtitle}
        buttonText={t.ctaSection.button}
      />
    </div>
  );
}
