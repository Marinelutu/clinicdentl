import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-square">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-8xl mb-4">😐</div>
                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  BEFORE
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-teal-50 to-blue-50 aspect-square">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-8xl mb-4">😁</div>
                <div className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  AFTER
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
            {images[current].title}
          </h3>
          <p className="text-gray-600">
            {images[current].description}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={prev}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-teal-50 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div className="text-sm text-gray-600 font-medium">
          {current + 1} / {images.length}
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
