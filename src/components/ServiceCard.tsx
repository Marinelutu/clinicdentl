import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  price?: string;
  showIcon?: boolean;
  variant?: 'default' | 'professional' | 'minimal';
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
  showIcon = true,
  variant = 'default'
}: ServiceCardProps) {

  // Different card styles for visual variety
  const cardStyles = {
    default: "group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-secondary-light/50",
    professional: "group professional-card p-8 rounded-md",
    minimal: "group bg-white p-6 border-l-4 border-primary hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-md"
  };

  // Different icon container styles per variant
  const iconStyles = {
    default: "bg-gradient-to-br from-primary-light/5 to-secondary-light/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm",
    professional: "w-12 h-12 bg-clinical/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-clinical/15 transition-colors",
    minimal: "w-10 h-10 flex items-center justify-center mb-3"
  };

  // Icon color per variant
  const iconColorClass = {
    default: "w-8 h-8 text-secondary",
    professional: "w-6 h-6 text-clinical",
    minimal: "w-5 h-5 text-primary"
  };

  return (
    <div className={cardStyles[variant]}>
      {showIcon && (
        <div className={iconStyles[variant]}>
          <Icon className={iconColorClass[variant]} />
        </div>
      )}

      <h3 className="text-xl font-serif font-bold text-primary mb-3">
        {title}
      </h3>

      <p className="text-neutral-600 leading-relaxed mb-4">
        {description}
      </p>

      {price && (
        <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-secondary-light to-secondary text-white px-4 py-2 rounded-lg font-semibold text-lg shadow-sm">
            {price}
          </span>
        </div>
      )}

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
