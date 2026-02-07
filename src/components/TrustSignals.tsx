import { Award, Users, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function TrustSignals() {
  const { t } = useLanguage();

  const signals = [
    {
      icon: Clock,
      text: t.home.trustItem1,
    },
    {
      icon: Shield,
      text: t.home.trustItem2,
    },
    {
      icon: Award,
      text: t.home.trustItem3,
    },
    {
      icon: Users,
      text: t.home.trustItem4,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {signals.map((signal, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group"
        >
          <div className="bg-gradient-to-br from-primary-light/5 to-secondary-light/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <signal.icon className="w-6 h-6 text-secondary" />
          </div>
          <p className="text-neutral-700 font-medium leading-relaxed">
            {signal.text}
          </p>
        </div>
      ))}
    </div>
  );
}
