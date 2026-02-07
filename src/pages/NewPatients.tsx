import { CTASection } from '../components/CTASection';
import { FAQ } from '../components/FAQ';
import { CheckCircle, Calendar, ClipboardList, Smile, Hand, Scan, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function NewPatients() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Calendar,
      ...t.newPatients.steps.step1,
    },
    {
      icon: ClipboardList,
      ...t.newPatients.steps.step2,
    },
    {
      icon: Smile,
      ...t.newPatients.steps.step3,
    },
    {
      icon: CheckCircle,
      ...t.newPatients.steps.step4,
    },
  ];

  const faqs = t.newPatients.faqs?.map(faq => ({
    question: faq.q,
    answer: faq.a,
  })) || [];

  return (
    <div>
      <section className="bg-gradient-to-br from-neutral-50 via-white to-secondary-light/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              {t.newPatients.title}
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t.newPatients.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.newPatients.process}
            </h2>
            <p className="text-xl text-neutral-600">
              Simple steps to start your journey to a healthier smile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-secondary to-primary-light w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-50 to-secondary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.newPatients.whatToExpect}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-4">
                <Hand className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.newPatients.expectations.welcome.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t.newPatients.expectations.welcome.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-4">
                <Scan className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.newPatients.expectations.exam.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t.newPatients.expectations.exam.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-4">
                <FileText className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.newPatients.expectations.plan.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t.newPatients.expectations.plan.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Everything you need to know before your first visit
            </p>
          </div>

          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection
        title={t.ctaSection.title}
        subtitle={t.ctaSection.subtitle}
        buttonText={t.ctaSection.button}
        secondaryButtonText={`${t.contact.phone}: +40 21 123 4567`}
      />
    </div>
  );
}
