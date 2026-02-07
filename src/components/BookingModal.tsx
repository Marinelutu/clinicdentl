import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    service: string;
    message: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const services = [
        'Consultație Generală',
        'Igienă Dentară',
        'Albire Dentară',
        'Implant Dentar',
        'Coroane și Punți',
        'Tratament de Canal',
        'Ortodonție',
        'Stomatologie Estetică',
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Numele este obligatoriu';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefonul este obligatoriu';
        } else if (!/^[0-9+\s()-]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Număr de telefon invalid';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email-ul este obligatoriu';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Adresă de email invalidă';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Booking submitted:', formData);
            setSubmitSuccess(true);
            setIsSubmitting(false);

            // Reset form after 2 seconds and close modal
            setTimeout(() => {
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    date: '',
                    time: '',
                    service: '',
                    message: '',
                });
                setSubmitSuccess(false);
                onClose();
            }, 2000);
        }, 1500);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-cream rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
                {/* Header */}
                <div className="sticky top-0 bg-cream border-b border-gold/20 px-8 py-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-serif text-primary">Programare Online</h2>
                        <p className="text-neutral-500 mt-1">Completați formularul pentru a face o programare</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-beige rounded-lg transition-colors"
                        aria-label="Închide"
                    >
                        <X className="w-6 h-6 text-neutral-600" />
                    </button>
                </div>

                {/* Success Message */}
                {submitSuccess && (
                    <div className="mx-8 mt-6 p-4 bg-sage/10 border border-sage/30 rounded-lg">
                        <p className="text-sage font-medium text-center">
                            ✓ Programarea a fost trimisă cu succes! Vă vom contacta în curând.
                        </p>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                            Nume Complet <span className="text-accent">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-red-500' : 'border-gold/20'
                                } rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all`}
                            placeholder="Ion Popescu"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                                Telefon <span className="text-accent">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-white border ${errors.phone ? 'border-red-500' : 'border-gold/20'
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all`}
                                placeholder="+40 712 345 678"
                            />
                            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                                Email <span className="text-accent">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-500' : 'border-gold/20'
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all`}
                                placeholder="ion.popescu@email.com"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-2">
                                Data Preferată
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-charcoal mb-2">
                                Ora Preferată
                            </label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                            />
                        </div>
                    </div>

                    {/* Service */}
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                            Tip Serviciu
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        >
                            <option value="">Selectați un serviciu</option>
                            {services.map((service) => (
                                <option key={service} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                            Mesaj Adițional (opțional)
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 bg-white border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                            placeholder="Detalii suplimentare despre programare..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 border border-gold/30 text-charcoal rounded-lg hover:bg-beige transition-all"
                        >
                            Anulează
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting || submitSuccess}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Se trimite...' : submitSuccess ? 'Trimis ✓' : 'Trimite Programarea'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
