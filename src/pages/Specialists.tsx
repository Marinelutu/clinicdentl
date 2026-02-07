import { CTASection } from '../components/CTASection';
import { ClinicGallery } from '../components/ClinicGallery';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';

export function Specialists() {
    const { t } = useLanguage();
    const { openBooking } = useBooking();

    const handleSpecialistBooking = () => {
        openBooking();
        // You can extend BookingContext to accept specialist preselection if needed
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-neutral-50 via-white to-secondary-light/10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
                            {t.about.title}
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            {t.about.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Specialists Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.about.doctors.map((doctor, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-secondary-light/50"
                            >
                                {/* Specialist Image */}
                                <div className="relative aspect-square bg-gradient-to-br from-primary-light/10 to-secondary-light/20 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center text-white text-4xl font-bold mb-4">
                                                {doctor.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <p className="text-sm text-neutral-500 px-4">
                                                Photo placeholder - Add specialist image
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Specialist Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-primary mb-1">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-sm text-secondary font-semibold mb-2">
                                        {doctor.title}
                                    </p>
                                    <p className="text-sm text-neutral-600 mb-1">
                                        {doctor.specialization}
                                    </p>
                                    <p className="text-xs text-neutral-500 mb-4">
                                        {doctor.experience}
                                    </p>
                                    <p className="text-sm text-neutral-600 mb-6 line-clamp-3">
                                        {doctor.bio}
                                    </p>

                                    {/* Booking Button */}
                                    <button
                                        onClick={handleSpecialistBooking}
                                        className="w-full bg-gradient-to-r from-secondary-light to-secondary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                    >
                                        Consultation with this specialist
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Clinic Gallery Section */}
            <section className="py-20 bg-gradient-to-br from-neutral-50 to-secondary-light/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-4">
                            {t.about.clinicPhotos.title}
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            {t.about.clinicPhotos.subtitle}
                        </p>
                    </div>

                    <ClinicGallery />
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title={t.ctaSection.title}
                subtitle={t.ctaSection.subtitle}
                buttonText={t.ctaSection.button}
            />
        </div>
    );
}
