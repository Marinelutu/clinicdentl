import { useState } from 'react';
import { ArrowRight, Sparkles, Award, Users, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BookingModal from './BookingModal';

export function Hero() {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-cream via-beige to-sage/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0M5QTk2MSIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block animate-fade-in-up">
              <span className="bg-sage/10 text-sage border border-sage/20 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                <Sparkles className="w-4 h-4" />
                Premium Dental Care
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight animate-fade-in-up animation-delay-100">
              {t.hero.title}
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="group bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-medium hover:shadow-xl hover-lift transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-white text-charcoal px-8 py-4 rounded-xl font-medium hover:bg-beige transition-all border border-gold/30 hover:border-gold hover-lift"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          <div className="relative lg:h-[500px] animate-fade-in animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-sage/10 rounded-3xl"></div>
            <img
              src="/images/hero-clinic.png"
              alt="Modern luxury dental clinic reception"
              className="rounded-3xl shadow-2xl object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-cream p-6 rounded-2xl shadow-xl border border-gold/20 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-sage to-gold p-3 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-neutral-600">Ani de Experiență</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up animation-delay-400">
          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-gradient-to-br from-sage/20 to-gold/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-sage" />
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
            <div className="text-sm text-neutral-600">Happy Patients</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-gradient-to-br from-sage/20 to-gold/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-gold" />
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
            <div className="text-sm text-neutral-600">Average Rating</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-gradient-to-br from-sage/20 to-gold/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-gold" />
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-neutral-600">Awards Won</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-gradient-to-br from-sage/20 to-gold/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-sage" />
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-neutral-600">Satisfaction</div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
