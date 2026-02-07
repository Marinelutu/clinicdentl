import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  treatment: string;
  text: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden border border-neutral-100">
        <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/5" />

        <div className="relative">
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < testimonials[current].rating
                    ? 'text-accent fill-accent'
                    : 'text-neutral-200'
                  }`}
              />
            ))}
          </div>

          <p className="text-xl text-neutral-700 leading-relaxed mb-6 italic font-serif">
            "{testimonials[current].text}"
          </p>

          <div>
            <div className="font-semibold text-primary">
              {testimonials[current].name}
            </div>
            <div className="text-sm text-secondary">
              {testimonials[current].treatment}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={prev}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-neutral-50 transition-all text-neutral-600 hover:text-primary"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === current ? 'bg-secondary w-8' : 'bg-neutral-300'
                }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-neutral-50 transition-all text-neutral-600 hover:text-primary"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
