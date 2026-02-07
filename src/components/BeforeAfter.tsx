import { useState } from 'react';
import { ChevronLeft, ChevronRight, Frown, Smile } from 'lucide-react';

interface BeforeAfterImage {
  title: string;
  description: string;
}

interface BeforeAfterProps {
  images: BeforeAfterImage[];
}

export function BeforeAfter({ images }: BeforeAfterProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % images.length);
  };

  const prev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100">
        <div className="grid md:grid-cols-2">
          <div className="relative bg-neutral-100 aspect-square">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <Frown className="w-24 h-24 text-neutral-400 mx-auto mb-4" />
                <div className="bg-neutral-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  BEFORE
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-primary-light/5 to-secondary-light/10 aspect-square">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <Smile className="w-24 h-24 text-secondary mx-auto mb-4" />
                <div className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  AFTER
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-neutral-50">
          <h3 className="text-xl font-serif font-bold text-primary mb-2">
            {images[current].title}
          </h3>
          <p className="text-neutral-600">
            {images[current].description}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={prev}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-neutral-50 transition-all text-neutral-600 hover:text-primary"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="text-sm text-neutral-600 font-medium">
          {current + 1} / {images.length}
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
