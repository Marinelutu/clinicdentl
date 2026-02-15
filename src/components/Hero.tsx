import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users, Star, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import { useQuiz } from '../context/QuizContext';
import { ToothScene } from './ToothScene';

export function Hero() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const { openQuiz } = useQuiz();

  // Type-safe access for quiz CTA text
  const quizCta = ((t as Record<string, unknown>).quiz as Record<string, unknown> | undefined)?.cta as string | undefined;

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden hero-3d-section">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />

      {/* Decorative mesh pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#4ab8d4]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#c9a961]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-white/10 backdrop-blur-sm text-white/90 border border-white/15 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 w-fit">
                <Sparkles className="w-4 h-4 text-[#4ab8d4]" />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] mb-6"
            >
              {t.hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg lg:text-xl text-white/70 leading-relaxed mb-8 max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={openQuiz}
                className="group relative bg-gradient-to-r from-[#4ab8d4] to-[#3a9db8] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(74,184,212,0.3)] hover:scale-[1.02] transition-all shadow-lg flex items-center justify-center space-x-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <HelpCircle className="w-5 h-5" />
                <span>{quizCta || 'Take the Quiz'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={openBooking}
                className="bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all border border-white/15 hover:border-white/30"
              >
                {t.hero.ctaSecondary}
              </button>
            </motion.div>
          </div>

          {/* Right: 3D Tooth Model */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative w-full aspect-square max-w-[500px] mx-auto lg:max-w-none"
            >
              {/* Glow ring behind the model */}
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-[#4ab8d4]/10 via-transparent to-[#c9a961]/10 blur-2xl pointer-events-none" />

              <ToothScene />
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 lg:mt-20"
        >
          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 border border-white/5">
                <Users className="w-6 h-6 text-[#4ab8d4]" />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">10,000+</div>
            <div className="text-sm text-white/50">{t.hero.stats.patients}</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 border border-white/5">
                <Star className="w-6 h-6 text-[#c9a961]" />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9/5</div>
            <div className="text-sm text-white/50">{t.hero.stats.rating}</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 border border-white/5">
                <Award className="w-6 h-6 text-[#4ab8d4]" />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-sm text-white/50">{t.hero.stats.awards}</div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 border border-white/5">
                <Sparkles className="w-6 h-6 text-[#c9a961]" />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-white/50">{t.hero.stats.satisfaction}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
