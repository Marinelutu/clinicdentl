import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// Auto-rotating clinic gallery component
export function ClinicGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Placeholder images - replace with actual clinic photos
    const clinicImages = [
        {
            url: '/images/clinic-reception.jpg',
            caption: 'Modern Reception Area',
            placeholder: 'Reception',
        },
        {
            url: '/images/clinic-treatment.jpg',
            caption: 'State-of-the-Art Treatment Room',
            placeholder: 'Treatment Room',
        },
        {
            url: '/images/clinic-waiting.jpg',
            caption: 'Comfortable Waiting Area',
            placeholder: 'Waiting Area',
        },
        {
            url: '/images/clinic-equipment.jpg',
            caption: 'Advanced Dental Equipment',
            placeholder: 'Equipment',
        },
        {
            url: '/images/clinic-hallway.jpg',
            caption: 'Clean Modern Hallways',
            placeholder: 'Hallway',
        },
        {
            url: '/images/clinic-sterilization.jpg',
            caption: 'Sterilization Room',
            placeholder: 'Sterilization',
        },
    ];

    // Auto-advance every 3 seconds
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % clinicImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused, clinicImages.length]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % clinicImages.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + clinicImages.length) % clinicImages.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative">
            {/* Main Gallery Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-neutral-100">
                {/* Image Display */}
                <div className="relative w-full h-full">
                    {clinicImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            {/* Placeholder for now - replace with actual images */}
                            <div className="w-full h-full bg-gradient-to-br from-primary-light/20 to-secondary-light/30 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-primary/30 mb-4">
                                        {image.placeholder}
                                    </div>
                                    <p className="text-neutral-600 font-semibold">
                                        {image.caption}
                                    </p>
                                    <p className="text-sm text-neutral-500 mt-2">
                                        Add clinic photo: {image.url}
                                    </p>
                                </div>
                            </div>

                            {/* Uncomment when you add actual images:
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              */}
                        </div>
                    ))}

                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p className="text-white text-lg font-semibold">
                            {clinicImages[currentIndex].caption}
                        </p>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Play/Pause Button */}
                <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
                    aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
                >
                    {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {clinicImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-secondary w-8'
                            : 'bg-neutral-300 hover:bg-neutral-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Auto-rotation indicator */}
            <p className="text-center text-sm text-neutral-500 mt-4">
                {isPaused ? '⏸ Slideshow paused' : '▶ Auto-rotating every 3 seconds'}
            </p>
        </div>
    );
}
