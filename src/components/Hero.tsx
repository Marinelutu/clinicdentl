import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzE0YjhhNiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                ✨ Premium Dental Care
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-teal-200">
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          <div className="relative lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20"></div>
              <div className="relative h-full flex items-center justify-center p-12">
                <div className="text-center space-y-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <div className="text-6xl mb-4">😊</div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                      15+ Years
                    </h3>
                    <p className="text-gray-600">Excellence in Dental Care</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="text-3xl font-bold text-teal-600">10K+</div>
                      <div className="text-sm text-gray-600">Happy Patients</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="text-3xl font-bold text-teal-600">5.0</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
