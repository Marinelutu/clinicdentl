import { CTASection } from '../components/CTASection';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { TrustSignals } from '../components/TrustSignals';
import { StaffCertificates } from '../components/StaffCertificates';
import { FAQ } from '../components/FAQ';
import { Sparkles, Shield, Wrench, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useQuiz } from '../context/QuizContext';

export function Home() {
  const { t } = useLanguage();
  const { openQuiz } = useQuiz();

  // Type-safe access for quiz CTA text
  const quizCta = ((t as Record<string, unknown>).quiz as Record<string, unknown> | undefined)?.cta as string | undefined;

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

  // Map newPatients FAQ data (q/a format) to FAQ component format (question/answer)
  const homeFaqs = (t.newPatients?.faqs || []).map((faq: { q: string; a: string }) => ({
    question: faq.q,
    answer: faq.a,
  }));

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

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={t.services[service.titleKey as keyof typeof t.services] as string}
                description={service.description}
                features={service.features}
                variant={index % 2 === 0 ? 'professional' : 'default'}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-gold-400/20 via-transparent to-sage-400/20">
              <button
                onClick={openQuiz}
                className="group relative bg-primary text-white px-10 py-5 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-3 overflow-hidden border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-white/10 to-gold-400/0 -translate-x-full group-hover:animate-shimmer" />
                <HelpCircle className="w-5 h-5 text-gold-300" />
                <span>{quizCta || 'Nu ești sigur? Fă Quiz-ul'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="mt-4 text-neutral-500 text-sm">
              {t.home.quizHelper || 'Doar 2 minute pentru a găsi tratamentul perfect'}
            </p>
          </div>
        </div>
      </section>

      {/* New Dark Contrast Section for Premium Feel */}
      <section className="section-contrast py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/clinic-reception.png"
                alt="Luxury dental clinic reception and waiting area"
                className="rounded-md shadow-2xl border-4 border-white/10 w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {t.home.servicesTitle}
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                {t.home.equipmentDescription}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 p-4 rounded-md border border-white/10">
                  <div className="text-3xl font-bold text-accent mb-1">15+</div>
                  <div className="text-sm text-neutral-400">{t.home.yearsExperience}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-md border border-white/10">
                  <div className="text-3xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-neutral-400">{t.home.clientSatisfaction}</div>
                </div>
              </div>
            </div>
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

      {/* Staff & Certificates Section */}
      <StaffCertificates />

      {/* Homepage FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              {t.serviceDetail?.faqTitle || 'Întrebări Frecvente'}
            </h2>
            <p className="text-neutral-600">
              {t.newPatients?.subtitle || ''}
            </p>
          </div>

          <FAQ items={homeFaqs} />
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

      <CTASection
        title={t.home.ready?.title || ''}
        subtitle={t.home.ready?.subtitle || ''}
        buttonText={t.home.ready?.button || ''}
      />
    </div>
  );
}
