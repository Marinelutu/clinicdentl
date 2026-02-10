import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, Clock, ChevronDown, ChevronUp, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
    name: string;
    treatment: string;
    text: string;
    rating: number;
    timeAgo?: string;
    verified?: boolean;
}

interface TestimonialWallProps {
    testimonials: Testimonial[];
}

// Generate consistent gradient from name
function getAvatarGradient(name: string): string {
    const gradients = [
        'from-amber-400 to-orange-500',
        'from-emerald-400 to-teal-500',
        'from-violet-400 to-purple-500',
        'from-rose-400 to-pink-500',
        'from-cyan-400 to-blue-500',
        'from-lime-400 to-green-500',
    ];
    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
}

function getInitials(name: string): string {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}

// Animated circular progress ring for rating
function RatingRing({ rating, size = 48 }: { rating: number; size?: number }) {
    const strokeWidth = 3;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (rating / 5) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="text-neutral-200"
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    className="text-accent"
                    initial={{ strokeDasharray: `0 ${circumference}` }}
                    animate={{ strokeDasharray: `${progress} ${circumference}` }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{rating.toFixed(1)}</span>
            </div>
        </div>
    );
}

function TestimonialCard({
    testimonial,
    index,
}: {
    testimonial: Testimonial;
    index: number;
}) {
    const [expanded, setExpanded] = useState(false);
    const shouldTruncate = testimonial.text.length > 120;
    const displayText =
        shouldTruncate && !expanded
            ? testimonial.text.slice(0, 120) + '...'
            : testimonial.text;

    const timeAgoTexts = ['2 săpt.', '1 lună', '3 luni', '2 săpt.', '1 lună', '5 luni'];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group"
        >
            <div
                className={`
          relative bg-white border border-neutral-100 rounded-2xl p-6 
          shadow-sm hover:shadow-xl transition-all duration-500 
          hover:border-accent/30 hover:-translate-y-1
          ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
        `}
            >
                {/* Decorative quote */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10 group-hover:text-accent/20 transition-colors" />

                {/* Header: Avatar + Name + Badge */}
                <div className="flex items-start gap-4 mb-4">
                    {/* Animated Gradient Avatar */}
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`
              w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarGradient(testimonial.name)}
              flex items-center justify-center text-white font-bold text-sm
              shadow-md flex-shrink-0
            `}
                    >
                        {getInitials(testimonial.name)}
                    </motion.div>

                    <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-primary text-sm truncate">
                                {testimonial.name}
                            </h4>
                            {(testimonial.verified !== false) && (
                                <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            )}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-secondary font-medium">{testimonial.treatment}</span>
                            <span className="text-neutral-300">·</span>
                            <span className="text-xs text-neutral-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {testimonial.timeAgo || timeAgoTexts[index % timeAgoTexts.length]}
                            </span>
                        </div>
                    </div>

                    {/* Rating Ring */}
                    <RatingRing rating={testimonial.rating} size={42} />
                </div>

                {/* Stars Row */}
                <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                        >
                            <Star
                                className={`w-4 h-4 ${i < testimonial.rating
                                    ? 'text-accent fill-accent'
                                    : 'text-neutral-200'
                                    }`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-neutral-600 leading-relaxed text-sm font-serif italic">
                    "{displayText}"
                </p>

                {/* Expand/Collapse */}
                {shouldTruncate && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-1 mt-2 text-xs text-accent hover:text-accent-dark font-medium transition-colors"
                    >
                        {expanded ? (
                            <>Mai puțin <ChevronUp className="w-3 h-3" /></>
                        ) : (
                            <>Citește tot <ChevronDown className="w-3 h-3" /></>
                        )}
                    </button>
                )}

                {/* Helpful Button */}
                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-neutral-100">
                    <button className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-accent transition-colors group/btn">
                        <ThumbsUp className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                        Util
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export function TestimonialWall({ testimonials }: TestimonialWallProps) {
    const { t } = useLanguage();

    // Aggregate stats
    const avgRating = testimonials.length
        ? (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)
        : '5.0';

    return (
        <div>
            {/* Google-Reviews-Style Aggregate Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
                {/* Big Rating */}
                <div className="flex items-center gap-4">
                    <div className="text-6xl font-bold text-primary font-serif">{avgRating}</div>
                    <div>
                        <div className="flex items-center gap-0.5 mb-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.round(Number(avgRating))
                                        ? 'text-accent fill-accent'
                                        : 'text-neutral-200'
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-sm text-neutral-500">
                            {t.home?.testimonialsSubtitle || 'Bazat pe recenzii verificate'}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-12 bg-neutral-200" />

                {/* Rating Breakdown */}
                <div className="space-y-1">
                    {[5, 4, 3].map((stars) => {
                        const count = testimonials.filter((t) => t.rating >= stars).length;
                        const pct = testimonials.length ? (count / testimonials.length) * 100 : 0;
                        return (
                            <div key={stars} className="flex items-center gap-2 text-xs">
                                <span className="text-neutral-500 w-3">{stars}</span>
                                <Star className="w-3 h-3 text-accent fill-accent" />
                                <div className="w-24 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-accent rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${pct}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    />
                                </div>
                                <span className="text-neutral-400 w-6">{Math.round(pct)}%</span>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Masonry-Style Testimonial Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        testimonial={testimonial}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
