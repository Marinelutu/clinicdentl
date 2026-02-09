import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users, Star, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import { useQuiz } from '../context/QuizContext';

export function Hero() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const { openQuiz } = useQuiz();

  // Type-safe access for quiz CTA text
  const quizCta = ((t as Record<string, unknown>).quiz as Record<string, unknown> | undefined)?.cta as string | undefined;

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="DentaVita Modern Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30"></div>
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wMyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 w-fit">
              <Sparkles className="w-4 h-4" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline with Delay */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
            className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3 }}
            className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={openQuiz}
              className="group bg-white text-primary px-8 py-4 rounded-md font-semibold hover:shadow-2xl hover:scale-105 transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <HelpCircle className="w-5 h-5" />
              <span>{quizCta || 'Take the Quiz'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openBooking}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold hover:bg-white/20 transition-all border-2 border-white/30 hover:border-white/50"
            >
              {t.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 lg:mt-20"
        >
          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-1">10,000+</div>
            <div className="text-sm text-white/80">{t.hero.stats.patients}</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-1">4.9/5</div>
            <div className="text-sm text-white/80">{t.hero.stats.rating}</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-sm text-white/80">{t.hero.stats.awards}</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-white/80">{t.hero.stats.satisfaction}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
