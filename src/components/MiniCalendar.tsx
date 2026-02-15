import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';

interface TimeSlot {
    time: string;
    available: boolean;
    lastSlot?: boolean;
}

interface DaySlots {
    date: Date;
    dayName: string;
    dayNumber: number;
    slots: TimeSlot[];
}

export function MiniCalendar() {
    const { t } = useLanguage();
    const { openBooking } = useBooking();
    const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

    // Generate mock data for current week + offset
    const generateWeekData = (weekOffset: number): DaySlots[] => {
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() + (weekOffset * 7));

        const weekData: DaySlots[] = [];
        const dayNames = ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'];

        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            // Skip Sundays (day 0)
            if (date.getDay() === 0) continue;

            // Mock availability - more slots available in the future
            const availabilityRate = weekOffset === 0 ? 0.4 : 0.7;

            const slots: TimeSlot[] = [
                { time: '09:00', available: Math.random() > availabilityRate },
                { time: '11:00', available: Math.random() > availabilityRate },
                { time: '14:00', available: Math.random() > availabilityRate },
                { time: '16:00', available: Math.random() > availabilityRate, lastSlot: Math.random() > 0.7 }
            ];

            weekData.push({
                date,
                dayName: dayNames[date.getDay()],
                dayNumber: date.getDate(),
                slots
            });
        }

        return weekData;
    };

    const weekData = generateWeekData(currentWeekOffset);

    const handleSlotClick = (day: DaySlots, slot: TimeSlot) => {
        if (slot.available) {
            // Pre-populate booking modal with selected date/time
            openBooking();
            // In a real implementation, you would pass the date/time to the booking modal
            console.log(`Selected: ${day.date.toLocaleDateString()} at ${slot.time}`);
        }
    };

    const goToPreviousWeek = () => {
        if (currentWeekOffset > 0) {
            setCurrentWeekOffset(currentWeekOffset - 1);
        }
    };

    const goToNextWeek = () => {
        if (currentWeekOffset < 3) { // Limit to 4 weeks ahead
            setCurrentWeekOffset(currentWeekOffset + 1);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-neutral-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    <h3 className="font-serif font-bold text-lg text-primary">
                        {t.calendar?.title || 'Sloturi Disponibile'}
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={goToPreviousWeek}
                        disabled={currentWeekOffset === 0}
                        className="p-1 rounded hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        aria-label="Săptămâna anterioară"
                    >
                        <ChevronLeft className="w-5 h-5 text-neutral-600" />
                    </button>
                    <button
                        onClick={goToNextWeek}
                        disabled={currentWeekOffset === 3}
                        className="p-1 rounded hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        aria-label="Săptămâna următoare"
                    >
                        <ChevronRight className="w-5 h-5 text-neutral-600" />
                    </button>
                </div>
            </div>

            {/* Urgency Message */}
            <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800 font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {t.calendar?.urgency || 'Sloturile se ocupă rapid!'}
                </p>
            </div>

            {/* Calendar Grid */}
            <div className="space-y-3">
                {weekData.map((day, dayIndex) => (
                    <div key={dayIndex} className="border-b border-neutral-100 last:border-0 pb-3 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-neutral-700">
                                    {day.dayName}
                                </span>
                                <span className="text-xs text-neutral-500">
                                    {day.dayNumber} {day.date.toLocaleDateString('ro-RO', { month: 'short' })}
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {day.slots.map((slot, slotIndex) => (
                                <button
                                    key={slotIndex}
                                    onClick={() => handleSlotClick(day, slot)}
                                    disabled={!slot.available}
                                    className={`
                    px-3 py-2 rounded-md text-xs font-medium transition-all
                    ${slot.available
                                            ? slot.lastSlot
                                                ? 'bg-orange-100 text-orange-700 border border-orange-300 hover:bg-orange-200 hover:shadow-sm'
                                                : 'bg-sage/10 text-sage border border-sage/30 hover:bg-sage/20 hover:shadow-sm'
                                            : 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200'
                                        }
                  `}
                                >
                                    {slot.time}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-neutral-100">
                <div className="flex flex-wrap gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-sage/20 border border-sage/30"></div>
                        <span className="text-neutral-600">{t.calendar?.available || 'Disponibil'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-orange-100 border border-orange-300"></div>
                        <span className="text-neutral-600">{t.calendar?.lastSlot || 'Ultimul slot'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-neutral-100 border border-neutral-200"></div>
                        <span className="text-neutral-600">{t.calendar?.booked || 'Ocupat'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
