import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/ui/PageTransition';

export function Contact() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div>
        <section className="bg-gradient-to-br from-neutral-50 via-white to-secondary-light/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
                {t.contact.title}
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  {t.contact.getInTouch}
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary-light/10 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.contact.location}</h3>
                      <p className="text-neutral-600">Str. Primăverii 45</p>
                      <p className="text-neutral-600">București 011971</p>
                      <p className="text-neutral-600">România</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary-light/10 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.contact.phone}</h3>
                      <p className="text-neutral-600">+40 21 123 4567</p>
                      <p className="text-sm text-secondary mt-1">{t.contact.emergencyLabel}: +40 21 123 4568</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary-light/10 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.contact.email}</h3>
                      <p className="text-neutral-600">contact@dentavita.ro</p>
                      <p className="text-neutral-600">appointments@dentavita.ro</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary-light/10 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{t.contact.hours}</h3>
                      <div className="space-y-1 text-neutral-600">
                        <p>{t.contact.schedule?.weekdays}</p>
                        <p>{t.contact.schedule?.saturday}</p>
                        <p>{t.contact.schedule?.sunday}</p>
                        <p className="text-sm text-secondary mt-2">{t.contact.schedule?.emergency}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">{t.contact.emergencyBox?.title}</h3>
                  <p className="mb-6 text-neutral-50">
                    {t.contact.emergencyBox?.text}
                  </p>
                  <button className="bg-white text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-all">
                    {t.contact.emergencyBox?.button}
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-secondary-light/10 rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  {t.contact.form.title}
                </h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors"
                      placeholder="+40 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-secondary to-secondary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-secondary-dark hover:to-primary-light transition-all shadow-lg hover:shadow-xl"
                  >
                    {t.contact.form.submit}
                  </button>

                  <p className="text-sm text-neutral-500 text-center">
                    {t.contact.form.demo}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-neutral-50 to-secondary-light/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-secondary-light/20 to-primary-light/20 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="mb-4">
                    <MapPin className="w-12 h-12 text-secondary mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {t.contact.map?.title}
                  </h3>
                  <p className="text-neutral-600">
                    Str. Primăverii 45, București 011971
                  </p>
                  <button className="mt-6 bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-dark transition-all">
                    {t.contact.map?.button}
                  </button>
                </div>
              </div>
              <div className="p-6 bg-neutral-50 text-center">
                <p className="text-sm text-neutral-600">
                  {t.contact.map?.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
