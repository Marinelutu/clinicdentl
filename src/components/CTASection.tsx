import { useBooking } from '../context/BookingContext';
import { MiniCalendar } from './MiniCalendar';

interface CTASectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    secondaryButtonText?: string;
    onSecondaryClick?: () => void;
    variant?: 'default' | 'card';
    showCalendar?: boolean;
}

export function CTASection({
    title,
    subtitle,
    buttonText,
    secondaryButtonText,
    onSecondaryClick,
    variant = 'default',
    showCalendar = false,
}: CTASectionProps) {
    const { openBooking } = useBooking();

    if (variant === 'card') {
        return (
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main CTA Card */}
                        <div className="lg:col-span-2">
                            <div className="bg-gradient-to-br from-secondary to-primary rounded-xl p-12 text-white text-center h-full flex flex-col justify-center">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                    {title}
                                </h2>
                                <p className="text-xl text-neutral-50 mb-8 leading-relaxed max-w-3xl mx-auto">
                                    {subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={openBooking}
                                        className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-50 transition-all shadow-xl hover:shadow-2xl"
                                    >
                                        {buttonText}
                                    </button>
                                    {secondaryButtonText && (
                                        <button
                                            onClick={onSecondaryClick}
                                            className="bg-primary-light text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary transition-all border-2 border-white/20"
                                        >
                                            {secondaryButtonText}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Calendar Sidebar - Desktop Only */}
                        {showCalendar && (
                            <div className="hidden lg:block">
                                <MiniCalendar />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                    {title}
                </h2>
                <p className="text-xl text-neutral-50 mb-8 leading-relaxed">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={openBooking}
                        className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-50 transition-all shadow-xl hover:shadow-2xl"
                    >
                        {buttonText}
                    </button>
                    {secondaryButtonText && (
                        <button
                            onClick={onSecondaryClick}
                            className="bg-primary-light text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary transition-all border-2 border-white/20"
                        >
                            {secondaryButtonText}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
