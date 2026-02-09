import { useReducer, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles, RotateCcw, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import { quizQuestions, getRecommendation } from '../data/quizData';
import { getServiceBySlug } from '../data/services';

// ─── State ──────────────────────────────────────────────────────────
interface QuizState {
    currentStep: number; // 0..N-1 = questions, N = result
    answers: number[];
}

type QuizAction =
    | { type: 'SELECT_OPTION'; questionIndex: number; optionIndex: number }
    | { type: 'RESET' };

function quizReducer(state: QuizState, action: QuizAction): QuizState {
    switch (action.type) {
        case 'SELECT_OPTION': {
            const newAnswers = [...state.answers];
            newAnswers[action.questionIndex] = action.optionIndex;
            return {
                currentStep: state.currentStep + 1,
                answers: newAnswers,
            };
        }
        case 'RESET':
            return { currentStep: 0, answers: [] };
        default:
            return state;
    }
}

// ─── Animation variants ─────────────────────────────────────────────
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring' as const, damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
};

const stepVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 120 : -120,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring' as const, damping: 30, stiffness: 300 },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -120 : 120,
        opacity: 0,
        transition: { duration: 0.2 },
    }),
};

const optionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.08 * i, duration: 0.35, ease: 'easeOut' as const },
    }),
};

// ─── Component ──────────────────────────────────────────────────────
export default function QuizModal() {
    const { isQuizOpen, closeQuiz } = useQuiz();
    const { openBooking } = useBooking();
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(quizReducer, { currentStep: 0, answers: [] });

    const totalQuestions = quizQuestions.length;
    const isResult = state.currentStep >= totalQuestions;

    // Type-safe quiz translations access
    const quiz = (t as Record<string, unknown>).quiz as Record<string, unknown> | undefined;

    const getQuizText = useCallback(
        (key: string): string => {
            if (!quiz) return key;
            // Support dot paths like "q1.prompt"
            const parts = key.split('.');
            let current: unknown = quiz;
            for (const part of parts) {
                if (current && typeof current === 'object' && part in (current as Record<string, unknown>)) {
                    current = (current as Record<string, unknown>)[part];
                } else {
                    return key;
                }
            }
            return typeof current === 'string' ? current : key;
        },
        [quiz]
    );

    const handleSelect = (optionIndex: number) => {
        dispatch({
            type: 'SELECT_OPTION',
            questionIndex: state.currentStep,
            optionIndex,
        });
    };

    const handleReset = () => dispatch({ type: 'RESET' });

    const handleClose = () => {
        closeQuiz();
        // Reset after close animation
        setTimeout(() => dispatch({ type: 'RESET' }), 300);
    };

    const handleLearnMore = () => {
        const slug = getRecommendation(state.answers);
        handleClose();
        navigate(`/services/${slug}`);
    };

    const handleBookNow = () => {
        handleClose();
        openBooking();
    };

    // Recommended service info
    const recommendedSlug = isResult ? getRecommendation(state.answers) : '';
    const recommendedService = isResult ? getServiceBySlug(recommendedSlug) : undefined;
    const recommendedTitle = recommendedService
        ? getQuizText(`result.services.${recommendedService.itemKey}`)
        : '';

    return (
        <AnimatePresence>
            {isQuizOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-sage-800" />
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wMyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />

                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all hover:scale-110"
                            aria-label="Close quiz"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="relative z-10 p-8">
                            {/* Progress bar */}
                            {!isResult && (
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white/70 text-sm font-medium">
                                            {getQuizText('progressLabel')} {state.currentStep + 1}/{totalQuestions}
                                        </span>
                                        <span className="text-white/50 text-xs">
                                            {Math.round(((state.currentStep) / totalQuestions) * 100)}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-gold-400 to-gold-300 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{
                                                width: `${((state.currentStep) / totalQuestions) * 100}%`,
                                            }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Content area with AnimatePresence for step transitions */}
                            <div className="min-h-[360px] flex flex-col">
                                <AnimatePresence mode="wait" custom={1}>
                                    {!isResult ? (
                                        // ─── Question Step ──────────────────────────
                                        <motion.div
                                            key={`step-${state.currentStep}`}
                                            custom={1}
                                            variants={stepVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            className="flex-1 flex flex-col"
                                        >
                                            {/* Question prompt */}
                                            <div className="mb-6">
                                                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-gold-300 px-3 py-1 rounded-md text-xs font-semibold mb-3">
                                                    <Sparkles className="w-3 h-3" />
                                                    {getQuizText(`${quizQuestions[state.currentStep].key}.badge`)}
                                                </span>
                                                <h2 className="text-2xl font-serif font-bold text-white leading-snug">
                                                    {getQuizText(`${quizQuestions[state.currentStep].key}.prompt`)}
                                                </h2>
                                            </div>

                                            {/* Options */}
                                            <div className="space-y-3 flex-1">
                                                {quizQuestions[state.currentStep].options.map((option, i) => (
                                                    <motion.button
                                                        key={option.key}
                                                        custom={i}
                                                        variants={optionVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        onClick={() => handleSelect(i)}
                                                        className="w-full text-left px-5 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/30 text-white transition-all duration-200 group flex items-center justify-between"
                                                    >
                                                        <span className="font-medium">
                                                            {getQuizText(`${quizQuestions[state.currentStep].key}.options.${option.key}`)}
                                                        </span>
                                                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ) : (
                                        // ─── Results Step ───────────────────────────
                                        <motion.div
                                            key="result"
                                            custom={1}
                                            variants={stepVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            className="flex-1 flex flex-col items-center text-center justify-center"
                                        >
                                            {/* Success icon */}
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{
                                                    type: 'spring',
                                                    damping: 12,
                                                    stiffness: 200,
                                                    delay: 0.1,
                                                }}
                                                className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-6 shadow-lg shadow-gold-400/30"
                                            >
                                                <Sparkles className="w-10 h-10 text-white" />
                                            </motion.div>

                                            <motion.h2
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-2xl font-serif font-bold text-white mb-3"
                                            >
                                                {getQuizText('result.title')}
                                            </motion.h2>

                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="text-white/80 mb-2 max-w-sm"
                                            >
                                                {getQuizText('result.subtitle')}
                                            </motion.p>

                                            {/* Recommended service card */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 mb-8 w-full max-w-xs"
                                            >
                                                <p className="text-gold-300 text-xs font-semibold uppercase tracking-wider mb-1">
                                                    {getQuizText('result.recommended')}
                                                </p>
                                                <p className="text-white text-lg font-serif font-bold">
                                                    {recommendedTitle}
                                                </p>
                                            </motion.div>

                                            {/* CTA buttons */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="flex flex-col sm:flex-row gap-3 w-full max-w-xs"
                                            >
                                                <button
                                                    onClick={handleLearnMore}
                                                    className="flex-1 flex items-center justify-center gap-2 bg-white text-primary px-5 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
                                                >
                                                    {getQuizText('result.learnMore')}
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={handleBookNow}
                                                    className="flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all"
                                                >
                                                    {getQuizText('result.bookNow')}
                                                </button>
                                            </motion.div>

                                            {/* Restart link */}
                                            <motion.button
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.6 }}
                                                onClick={handleReset}
                                                className="mt-4 flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm transition-colors"
                                            >
                                                <RotateCcw className="w-3.5 h-3.5" />
                                                {getQuizText('result.retake')}
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
