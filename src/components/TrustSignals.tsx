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
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <signal.icon className="w-6 h-6 text-teal-600" />
          </div>
          <p className="text-gray-700 font-medium leading-relaxed">
            {signal.text}
          </p>
        </div>
      ))}
    </div>
  );
}
