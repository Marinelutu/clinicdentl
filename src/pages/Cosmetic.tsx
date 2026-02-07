import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CTASection } from '../components/CTASection';
import { ServiceCard } from '../components/ServiceCard';
import { Star, Sparkles, Shield, Heart, Palette, Gem, Eye, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Cosmetic() {
  const { t } = useLanguage();

  const treatments = [
    {
      icon: Star,
      ...t.cosmetic.items.whitening,
    },
    {
      icon: Sparkles,
      ...t.cosmetic.items.veneers,
    },
    {
      icon: Shield,
      ...t.cosmetic.items.bonding,
    },
    {
      icon: Heart,
      ...t.cosmetic.items.design,
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-neutral-50 via-white to-secondary-light/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              {t.cosmetic.title}
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t.cosmetic.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.cosmetic.beforeAfter}
            </h2>
            <p className="text-neutral-500 italic mb-8">
              {t.cosmetic.disclaimer}
            </p>
          </div>


          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/teeth-before.png"
              afterImage="/images/teeth-after.png"
              alt="Cosmetic dentistry transformation"
            />
            <p className="text-center text-neutral-500 mt-6 italic flex items-center justify-center gap-2">
              <span className="animate-pulse">↔</span> Move the slider to reveal the transformation
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-50 to-secondary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.cosmetic.treatments}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t.cosmetic.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {treatments.map((treatment, index) => (
              <ServiceCard
                key={index}
                icon={treatment.icon}
                title={treatment.title}
                description={treatment.description}
                features={treatment.features}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="card"
        title={t.cosmetic.callToAction.title}
        subtitle={t.cosmetic.callToAction.subtitle}
        buttonText={t.cosmetic.callToAction.schedule}
        secondaryButtonText={t.cosmetic.callToAction.pricing}
      />

      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
            {t.cosmetic.features.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <Palette className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.cosmetic.features.artistic.title}</h3>
              <p className="text-neutral-600">
                {t.cosmetic.features.artistic.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <Gem className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.cosmetic.features.materials.title}</h3>
              <p className="text-neutral-600">
                {t.cosmetic.features.materials.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.cosmetic.features.detail.title}</h3>
              <p className="text-neutral-600">
                {t.cosmetic.features.detail.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.cosmetic.features.efficient.title}</h3>
              <p className="text-neutral-600">
                {t.cosmetic.features.efficient.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
