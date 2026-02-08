import React, { useState } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
    className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
    beforeImage,
    afterImage,
    alt,
    className = '',
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <div className={`relative w-full rounded-lg overflow-hidden shadow-2xl bg-neutral-100 ${className}`}>
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative w-full aspect-video">
                {/* After Image (Background - Base Layer) */}
                <img
                    src={afterImage}
                    alt={`After result - ${alt}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Before Image (Top Layer - Clipped) */}
                <img
                    src={beforeImage}
                    alt={`Before state - ${alt}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                />

                {/* Slider Handle Visuals */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-10"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary rounded-full p-2 shadow-lg border border-neutral-100">
                        <ChevronsLeftRight size={20} />
                    </div>
                </div>

                {/* Interactive Slider Input */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label={`Compare before and after images for ${alt}`}
                />

                {/* Labels - Visible only when not hovering the handle potentially, or always? Always is better for clarity. */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 text-sm font-semibold rounded-full backdrop-blur-sm pointer-events-none z-10">
                    Before
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 text-sm font-semibold rounded-full backdrop-blur-sm pointer-events-none z-10">
                    After
                </div>
            </div>
        </div>
    );
};
