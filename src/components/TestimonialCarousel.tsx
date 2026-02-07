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
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
        <Quote className="absolute top-8 right-8 w-16 h-16 text-teal-100" />

        <div className="relative">
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < testimonials[current].rating
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
            "{testimonials[current].text}"
          </p>

          <div>
            <div className="font-semibold text-gray-900">
              {testimonials[current].name}
            </div>
            <div className="text-sm text-gray-500">
              {testimonials[current].treatment}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={prev}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-teal-50 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? 'bg-teal-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-teal-50 transition-all"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
