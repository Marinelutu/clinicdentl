import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-secondary-light/50">
      <div className="bg-gradient-to-br from-primary-light/5 to-secondary-light/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
        <Icon className="w-8 h-8 text-secondary" />
      </div>

      <h3 className="text-xl font-serif font-bold text-primary mb-3">
        {title}
      </h3>

      <p className="text-neutral-600 leading-relaxed mb-4">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-neutral-600">
              <span className="text-secondary mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
