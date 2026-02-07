import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smile } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openBooking } = useBooking();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/services', label: t.nav.services },
    { path: '/cosmetic', label: t.nav.cosmetic },
    { path: '/new-patients', label: t.nav.newPatients },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-primary to-primary-light p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-md">
              <Smile className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-primary">DentaVita</div>
              <div className="text-xs text-neutral-500 -mt-0.5">{t.hero.badge}</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'text-primary bg-primary/5'
                  : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-neutral-100 rounded-lg p-1">
              {(['ro', 'en', 'it'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${language === lang
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={openBooking}
              className="hidden lg:block bg-gradient-to-r from-sage to-sage/80 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-md hover-lift transition-all shadow-sm"
            >
              {t.nav.bookOnline}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-gold/20">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'text-primary bg-primary/5'
                  : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { openBooking(); setIsMenuOpen(false); }}
              className="w-full mt-4 bg-gradient-to-r from-sage to-sage/80 text-white px-6 py-3 rounded-lg font-medium hover:shadow-md transition-all shadow-sm"
            >
              {t.nav.bookOnline}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
