import { Link } from 'react-router-dom';
import { Smile, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t.nav.home },
    { path: '/services', label: t.nav.services },
    { path: '/cosmetic', label: t.nav.cosmetic },
    { path: '/new-patients', label: t.nav.newPatients },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary-dark text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary-light to-primary p-2 rounded-xl">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-serif font-bold text-white">DentaVita</div>
                <div className="text-xs text-neutral-400">{t.hero.badge}</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.contact.location}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Str. Primăverii 45, București 011971</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">+40 21 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">contact@dentavita.ro</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.followUs}</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-primary p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-primary p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-primary p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-neutral-400">
            © 2024 DentaVita. {t.footer.rights}.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-secondary transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
