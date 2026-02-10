import { HelpCircle } from 'lucide-react';
import { useQuiz } from '../context/QuizContext';
import { useLanguage } from '../context/LanguageContext';

export default function StickyMobileCTA() {
    const { openQuiz } = useQuiz();
    const { t } = useLanguage();

    // Type-safe access for quiz CTA text
    const quizCta = ((t as Record<string, unknown>).quiz as Record<string, unknown> | undefined)?.cta as string | undefined;

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 pb-safe bg-gradient-to-t from-cream via-cream to-transparent pointer-events-none">
            <button
                onClick={openQuiz}
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-4 px-6 rounded-xl shadow-2xl hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2 pointer-events-auto hover:scale-105 active:scale-95"
            >
                <HelpCircle className="w-5 h-5" />
                {quizCta || 'Fă Quiz-ul'}
            </button>
        </div>
    );
}
