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
      description: 'Regular checkups, cleanings, and preventive care to keep your smile healthy and bright.',
      features: ['Regular Checkups', 'Professional Cleaning', 'Fluoride Treatments', 'Oral Health Education'],
    },
    {
      icon: Shield,
      titleKey: 'cosmetic',
      description: 'Transform your smile with our advanced cosmetic dentistry treatments and procedures.',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeovers'],
    },
    {
      icon: Wrench,
      titleKey: 'restorative',
      description: 'Restore function and aesthetics with our comprehensive restorative dental services.',
      features: ['Dental Implants', 'Crowns & Bridges', 'Fillings', 'Root Canal Therapy'],
    },
    {
      icon: AlertCircle,
      titleKey: 'emergency',
      description: 'Immediate care for dental emergencies. We are here when you need us most.',
      features: ['24/7 Emergency Line', 'Same-Day Appointments', 'Pain Management', 'Urgent Care'],
    },
  ];

  const testimonials = [
    {
      name: 'Maria Popescu',
      treatment: 'Dental Implants',
      text: 'I was nervous about getting implants, but the team made me feel so comfortable. The results exceeded my expectations! My confidence has completely transformed.',
      rating: 5,
    },
    {
      name: 'Alexandru Ionescu',
      treatment: 'Teeth Whitening',
      text: 'Professional, caring, and incredibly skilled. My teeth look amazing after the whitening treatment. I cannot stop smiling!',
      rating: 5,
    },
    {
      name: 'Elena Munteanu',
      treatment: 'Smile Makeover',
      text: 'After years of hiding my smile, I finally have the confidence to show it off. The entire experience was comfortable and stress-free.',
      rating: 5,
    },
  ];

  return (
    <div>
      <Hero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {t.home.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={t.services[service.titleKey as keyof typeof t.services]}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {t.home.trustTitle}
            </h2>
          </div>

          <TrustSignals />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {t.home.testimonialsTitle}
            </h2>
            <p className="text-gray-500 italic">
              {t.home.testimonialsSubtitle}
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready for Your Best Smile?
          </h2>
          <p className="text-xl text-teal-50 mb-8 leading-relaxed">
            Schedule your consultation today and experience the difference of premium dental care.
          </p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-50 transition-all shadow-xl hover:shadow-2xl">
            {t.nav.bookOnline}
          </button>
        </div>
      </section>
    </div>
  );
}
