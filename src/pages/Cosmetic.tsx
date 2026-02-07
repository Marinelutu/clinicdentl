import { BeforeAfter } from '../components/BeforeAfter';
import { ServiceCard } from '../components/ServiceCard';
import { Star, Sparkles, Shield, Heart, Palette, Gem, Eye, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Cosmetic() {
  const { t } = useLanguage();

  const transformations = [
    {
      title: 'Complete Smile Makeover',
      description: 'Veneers, whitening, and contouring for a completely transformed smile.',
    },
    {
      title: 'Teeth Whitening Transformation',
      description: 'Professional whitening treatment for dramatically brighter teeth.',
    },
    {
      title: 'Veneer Application',
      description: 'Custom porcelain veneers for a natural, flawless appearance.',
    },
    {
      title: 'Gap Closure',
      description: 'Bonding and contouring to close gaps and create a uniform smile.',
    },
  ];

  const treatments = [
    {
      icon: Star,
      title: 'Professional Whitening',
      description: 'Advanced whitening technology for safe, effective, and long-lasting results.',
      features: ['Zoom! Whitening', 'Custom Take-Home Kits', 'Up to 8 Shades Lighter', 'Sensitive Teeth Options'],
    },
    {
      icon: Sparkles,
      title: 'Porcelain Veneers',
      description: 'Ultra-thin ceramic shells custom-designed to cover imperfections.',
      features: ['Natural Appearance', 'Stain Resistant', '10-15 Year Lifespan', 'Minimal Tooth Reduction'],
    },
    {
      icon: Shield,
      title: 'Dental Bonding',
      description: 'Quick and affordable solution for chips, gaps, and discoloration.',
      features: ['Single Visit Treatment', 'Natural-Looking Results', 'Cost-Effective', 'Minimally Invasive'],
    },
    {
      icon: Heart,
      title: 'Smile Design',
      description: 'Comprehensive planning using digital technology to preview your new smile.',
      features: ['Digital Smile Preview', 'Customized Treatment Plan', 'Multiple Procedure Integration', 'Predictable Results'],
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

          <BeforeAfter images={transformations} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-50 to-secondary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.cosmetic.treatments}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              State-of-the-art cosmetic procedures to give you the smile of your dreams.
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

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Your Dream Smile Awaits
            </h2>
            <p className="text-xl text-neutral-50 mb-8 leading-relaxed max-w-3xl mx-auto">
              Every smile transformation begins with a consultation. Let us create a personalized treatment plan designed specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-50 transition-all shadow-xl hover:shadow-2xl">
                Schedule Consultation
              </button>
              <button className="bg-primary-light text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary transition-all border-2 border-white/20">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
            What Makes Our Cosmetic Dentistry Different?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <Palette className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Artistic Approach</h3>
              <p className="text-neutral-600">
                We blend dental science with aesthetic artistry to create naturally beautiful smiles that complement your facial features.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <Gem className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Premium Materials</h3>
              <p className="text-neutral-600">
                Only the highest quality dental materials and latest technology for results that look natural and last for years.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Detail-Oriented</h3>
              <p className="text-neutral-600">
                Meticulous attention to every detail ensures your cosmetic work blends seamlessly with your natural teeth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Efficient Process</h3>
              <p className="text-neutral-600">
                Advanced digital technology and streamlined procedures mean fewer appointments and faster results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
