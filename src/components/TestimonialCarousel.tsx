import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, Quote } from 'lucide-react';

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) autoplay.play();
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
              <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 relative overflow-hidden border border-neutral-100">
                <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/5" />

                <div className="relative">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating
                          ? 'text-accent fill-accent'
                          : 'text-neutral-200'
                          }`}
                      />
                    ))}
                  </div>

                  <p className="text-xl text-neutral-700 leading-relaxed mb-6 italic font-serif">
                    "{testimonial.text}"
                  </p>

                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-secondary">
                      {testimonial.treatment}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all ${index === selectedIndex ? 'bg-secondary w-8' : 'bg-neutral-300 w-2'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
