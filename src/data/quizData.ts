import type { ServiceCategory } from './services';

export interface QuizOption {
    key: string;           // translation key suffix
    tags: ServiceCategory[]; // weighted categories
    weight: number;
}

export interface QuizQuestion {
    key: string;           // translation key suffix for the question prompt
    options: QuizOption[];
}

/**
 * 5 quiz questions — each option maps to one or more service categories
 * with a weight. The decision function tallies category weights and
 * returns the best-match service slug.
 */
export const quizQuestions: QuizQuestion[] = [
    // Q1 — What brings you here?
    {
        key: 'q1',
        options: [
            { key: 'pain', tags: ['emergency'], weight: 3 },
            { key: 'aesthetics', tags: ['cosmetic'], weight: 3 },
            { key: 'checkup', tags: ['preventive'], weight: 3 },
            { key: 'emergency', tags: ['emergency'], weight: 4 },
        ],
    },
    // Q2 — How do you feel about dental visits?
    {
        key: 'q2',
        options: [
            { key: 'comfortable', tags: ['cosmetic', 'restorative'], weight: 1 },
            { key: 'nervous', tags: ['preventive'], weight: 2 },
            { key: 'anxious', tags: ['preventive'], weight: 2 },
            { key: 'firstTime', tags: ['preventive'], weight: 3 },
        ],
    },
    // Q3 — What is most important to you?
    {
        key: 'q3',
        options: [
            { key: 'appearance', tags: ['cosmetic'], weight: 3 },
            { key: 'durability', tags: ['restorative'], weight: 3 },
            { key: 'quickTreatment', tags: ['emergency', 'cosmetic'], weight: 2 },
            { key: 'affordability', tags: ['preventive'], weight: 2 },
        ],
    },
    // Q4 — Past dental experience
    {
        key: 'q4',
        options: [
            { key: 'regular', tags: ['cosmetic', 'restorative'], weight: 2 },
            { key: 'some', tags: ['restorative'], weight: 2 },
            { key: 'onlyCheckups', tags: ['preventive'], weight: 2 },
            { key: 'never', tags: ['preventive'], weight: 3 },
        ],
    },
    // Q5 — Desired result
    {
        key: 'q5',
        options: [
            { key: 'painFree', tags: ['restorative', 'emergency'], weight: 3 },
            { key: 'whiterTeeth', tags: ['cosmetic'], weight: 3 },
            { key: 'replaceMissing', tags: ['restorative'], weight: 3 },
            { key: 'overallHealth', tags: ['preventive'], weight: 3 },
        ],
    },
];

/**
 * Maps each service category to a recommended service slug.
 */
const categoryToSlug: Record<ServiceCategory, string> = {
    preventive: 'dental-exams',
    cosmetic: 'teeth-whitening',
    restorative: 'dental-implants',
    emergency: 'emergency-care',
};

/**
 * Given the user's selected option indices, compute weighted category
 * scores and return the best-match service slug.
 */
export function getRecommendation(answers: number[]): string {
    const scores: Record<ServiceCategory, number> = {
        preventive: 0,
        cosmetic: 0,
        restorative: 0,
        emergency: 0,
    };

    answers.forEach((optionIdx, questionIdx) => {
        const question = quizQuestions[questionIdx];
        if (!question) return;
        const option = question.options[optionIdx];
        if (!option) return;
        option.tags.forEach((tag) => {
            scores[tag] += option.weight;
        });
    });

    // Find category with highest score
    let bestCategory: ServiceCategory = 'preventive';
    let bestScore = -1;
    (Object.entries(scores) as [ServiceCategory, number][]).forEach(([cat, score]) => {
        if (score > bestScore) {
            bestScore = score;
            bestCategory = cat;
        }
    });

    return categoryToSlug[bestCategory];
}
