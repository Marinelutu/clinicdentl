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
      title: 'Routine Dental Exams',
      description: 'Comprehensive oral health evaluations to detect issues early and maintain optimal dental health.',
      features: ['Visual Examination', 'Digital X-Rays', 'Oral Cancer Screening', 'Gum Health Assessment'],
    },
    {
      icon: Circle,
      title: 'Professional Cleaning',
      description: 'Thorough teeth cleaning to remove plaque, tartar, and stains for a healthier, brighter smile.',
      features: ['Plaque Removal', 'Tartar Removal', 'Polishing', 'Fluoride Treatment'],
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Proactive treatments to prevent dental problems before they start.',
      features: ['Sealants', 'Fluoride Treatments', 'Night Guards', 'Sports Guards'],
    },
  ];

  const cosmeticServices = [
    {
      icon: Star,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a dramatically brighter smile.',
      features: ['In-Office Whitening', 'Take-Home Kits', 'Safe & Effective', 'Long-Lasting Results'],
    },
    {
      icon: Sparkles,
      title: 'Porcelain Veneers',
      description: 'Custom-crafted veneers to transform the appearance of your teeth.',
      features: ['Natural Appearance', 'Stain Resistant', 'Durable', 'Minimally Invasive'],
    },
    {
      icon: Heart,
      title: 'Smile Makeovers',
      description: 'Comprehensive treatments combining multiple procedures for total smile transformation.',
      features: ['Personalized Planning', 'Multiple Procedures', 'Digital Smile Design', 'Stunning Results'],
    },
  ];

  const restorativeServices = [
    {
      icon: Wrench,
      title: 'Dental Implants',
      description: 'Permanent solution to replace missing teeth with natural-looking, functional results.',
      features: ['Natural Appearance', 'Permanent Solution', 'Bone Preservation', 'Improved Function'],
    },
    {
      icon: Shield,
      title: 'Crowns & Bridges',
      description: 'Restore damaged or missing teeth with custom-crafted restorations.',
      features: ['Natural Look', 'Strong & Durable', 'Custom Fit', 'Long-Lasting'],
    },
    {
      icon: Circle,
      title: 'Root Canal Therapy',
      description: 'Save infected or damaged teeth with gentle, effective treatment.',
      features: ['Pain Relief', 'Tooth Preservation', 'Modern Techniques', 'Comfortable Treatment'],
    },
  ];

  const emergencyServices = [
    {
      icon: AlertCircle,
      title: 'Emergency Dental Care',
      description: 'Immediate treatment for dental emergencies and urgent situations.',
      features: ['24/7 Availability', 'Same-Day Appointments', 'Fast Pain Relief', 'Expert Care'],
    },
    {
      icon: Zap,
      title: 'Tooth Extraction',
      description: 'Safe and comfortable tooth removal when necessary.',
      features: ['Gentle Technique', 'Sedation Options', 'Post-Care Support', 'Quick Recovery'],
    },
    {
      icon: Shield,
      title: 'Trauma Care',
      description: 'Specialized treatment for dental injuries and accidents.',
      features: ['Immediate Response', 'Tooth Preservation', 'Pain Management', 'Follow-Up Care'],
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
              Foundation of excellent oral health through regular care and prevention.
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
              />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.services.cosmetic}
            </h2>
            <p className="text-lg text-neutral-600">
              Transform your smile with our advanced aesthetic treatments.
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
              />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.services.restorative}
            </h2>
            <p className="text-lg text-neutral-600">
              Restore function and beauty to your smile with our comprehensive solutions.
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
              />
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.services.emergency}
            </h2>
            <p className="text-lg text-neutral-600">
              Immediate care when you need it most. We are here for dental emergencies.
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
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-neutral-50 mb-8 leading-relaxed">
            Schedule a consultation and our team will help you determine the best treatment plan for your needs.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-50 transition-all shadow-xl hover:shadow-2xl">
            {t.nav.bookOnline}
          </button>
        </div>
      </section>
    </div>
  );
}
