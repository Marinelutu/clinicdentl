import { FAQ } from '../components/FAQ';
import { CheckCircle, Calendar, ClipboardList, Smile, Hand, Scan, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function NewPatients() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Calendar,
      title: 'Schedule Your Visit',
      description: 'Book your first appointment online or by phone. We offer flexible scheduling to fit your busy life.',
    },
    {
      icon: ClipboardList,
      title: 'Complete Forms',
      description: 'Fill out our simple patient forms online before your visit to save time at the clinic.',
    },
    {
      icon: Smile,
      title: 'Meet Your Dentist',
      description: 'Enjoy a warm welcome and comprehensive consultation with our experienced dental team.',
    },
    {
      icon: CheckCircle,
      title: 'Begin Your Journey',
      description: 'Start your personalized treatment plan and journey toward optimal oral health.',
    },
  ];

  const faqs = [
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring a valid ID, your insurance card if applicable, a list of current medications, and any relevant medical history. If you have previous dental X-rays, bringing them can help us better understand your dental history.',
    },
    {
      question: 'How long will my first visit take?',
      answer: 'Your initial visit typically takes 60-90 minutes. This includes time for paperwork, a comprehensive examination, X-rays if needed, consultation with the dentist, and discussing your treatment plan.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'We work with most major insurance providers and will help you maximize your benefits. Our team will verify your insurance coverage and explain your out-of-pocket costs before any treatment begins.',
    },
    {
      question: 'What if I have dental anxiety?',
      answer: 'We completely understand dental anxiety and have extensive experience helping nervous patients feel comfortable. We offer sedation options, explain every step of treatment, and work at your pace to ensure a stress-free experience.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans to make dental care accessible. We accept various payment methods and can discuss financing options that work with your budget during your consultation.',
    },
    {
      question: 'Can I see the same dentist for all appointments?',
      answer: 'Absolutely! We believe continuity of care is important. You will be assigned a primary dentist who will oversee all your treatment, though our entire team collaborates to provide you with the best care possible.',
    },
  ];

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
              <h3 className="text-2xl font-bold text-primary mb-4">Warm Welcome</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our friendly staff will greet you and make you feel at home. We have created a comfortable, spa-like environment to help you relax.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-4">
                <Scan className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Comprehensive Exam</h3>
              <p className="text-neutral-600 leading-relaxed">
                Thorough examination using the latest technology, including digital X-rays and intraoral cameras to get a complete picture of your oral health.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-4">
                <FileText className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Treatment Plan</h3>
              <p className="text-neutral-600 leading-relaxed">
                Personalized treatment recommendations with clear explanations, cost estimates, and timeline. You will never feel pressured or rushed into decisions.
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

      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-50 mb-8 leading-relaxed">
            Join our family of happy patients and experience the DentaVita difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-50 transition-all shadow-xl hover:shadow-2xl">
              {t.nav.bookOnline}
            </button>
            <button className="bg-primary-light text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary transition-all border-2 border-white/20">
              Call Us: +40 21 123 4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
