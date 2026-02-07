import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
          >
            <span className="font-semibold text-primary pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${openIndex === index ? 'transform rotate-180' : ''
                }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
          >
            <div className="px-6 py-4 bg-neutral-50 text-neutral-600 leading-relaxed border-t border-neutral-100">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
