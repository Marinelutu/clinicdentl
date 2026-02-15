import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../config/contact';

export function FloatingChatButton() {
    const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hidden md:flex items-center justify-center"
            aria-label="Contact pe WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
        </a>
    );
}
