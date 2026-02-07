import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.contact.location}</h3>
                    <p className="text-gray-600">Str. Primăverii 45</p>
                    <p className="text-gray-600">București 011971</p>
                    <p className="text-gray-600">România</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.contact.phone}</h3>
                    <p className="text-gray-600">+40 21 123 4567</p>
                    <p className="text-sm text-teal-600 mt-1">Emergency: +40 21 123 4568</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.contact.email}</h3>
                    <p className="text-gray-600">contact@dentavita.ro</p>
                    <p className="text-gray-600">appointments@dentavita.ro</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.contact.hours}</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 9:00 - 19:00</p>
                      <p>Saturday: 9:00 - 15:00</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-teal-600 mt-2">Emergency services available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Dental Care</h3>
                <p className="mb-6 text-teal-50">
                  If you have a dental emergency outside of our regular hours, please call our emergency line. We provide urgent care when you need it most.
                </p>
                <button className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-all">
                  Call Emergency Line
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Send Us A Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="+40 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
                >
                  {t.contact.form.submit}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  This is a demo form. No data will be submitted.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Find Us Here
                </h3>
                <p className="text-gray-600">
                  Str. Primăverii 45, București 011971
                </p>
                <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-all">
                  Open in Maps
                </button>
              </div>
            </div>
            <div className="p-6 bg-gray-50 text-center">
              <p className="text-sm text-gray-600">
                Conveniently located in the heart of București with easy access to public transportation and parking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
