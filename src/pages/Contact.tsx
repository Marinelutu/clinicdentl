import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/ui/PageTransition';
import { supabase } from '../lib/supabase';

import SEO from '../components/SEO';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          status: 'new'
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div>
        <SEO
          title={t.seo.contact.title}
          description={t.seo.contact.description}
          lang={document.documentElement.lang}
        />
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-sage/10 border border-sage/30 rounded-xl flex items-center gap-3 animate-fade-in mb-6">
                      <CheckCircle className="w-5 h-5 text-sage" />
                      <p className="text-sage font-medium">{t.booking?.success || 'Success!'}</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-fade-in mb-6">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <p className="text-red-600 font-medium">
                        {t.booking?.errors?.submitError || 'An error occurred. Please try again.'}
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
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
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors"
                      placeholder="+40 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full bg-gradient-to-r from-secondary to-secondary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-secondary-dark hover:to-primary-light transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t.booking?.sending || 'Sending...'}
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        {t.common?.success || 'Sent!'}
                      </>
                    ) : (
                      t.contact.form.submit
                    )}
                  </button>

                  {!submitStatus && (
                    <p className="text-sm text-neutral-500 text-center">
                      {t.contact.form.demo}
                    </p>
                  )}
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
