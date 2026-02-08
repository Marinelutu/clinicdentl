import { useState } from 'react';
import { ArrowRight, Sparkles, Award, Users, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BookingModal from './BookingModal';

export function Hero() {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0M5QTk2MSIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block animate-fade-in-up">
              <span className="bg-sage/10 text-sage border border-sage/30 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 w-fit">
                <Sparkles className="w-4 h-4" />
                {t.hero.badge}
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
                className="group bg-primary text-white px-8 py-4 rounded-md font-medium hover:shadow-xl hover:bg-primary-light transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-white text-charcoal px-8 py-4 rounded-md font-medium hover:bg-neutral-100 transition-all border-2 border-primary hover:border-clinical"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          <div className="relative lg:h-[500px] animate-fade-in animation-delay-200">
            <img
              src="/images/hero-clinic.png"
              alt="Modern luxury dental clinic reception"
              className="rounded-md shadow-2xl object-cover w-full h-full border-4 border-white"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-md shadow-xl border-2 border-primary/10 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="bg-clinical p-3 rounded-md">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-neutral-600">{t.hero.stats.experience}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up animation-delay-400">
          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-sage/15 p-3 rounded-md group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-sage" />
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
            <div className="text-sm text-neutral-600">{t.hero.stats.patients}</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-gradient-to-br from-sage/20 to-gold/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-gold" />
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
            <div className="text-sm text-neutral-600">{t.hero.stats.rating}</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-gradient-to-br from-sage/20 to-gold/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-gold" />
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-neutral-600">{t.hero.stats.awards}</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-gradient-to-br from-sage/20 to-gold/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-sage" />
              </div>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-neutral-600">{t.hero.stats.satisfaction}</div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
