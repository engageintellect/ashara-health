"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

interface TimeSlot {
  time: string;
  display: string;
  available: boolean;
}

interface AppointmentPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (date: string, time: string) => void;
  selectedDate?: string;
  selectedTime?: string;
}

// Mock availability data - in real app, this would come from an API
const mockAvailability: Record<string, TimeSlot[]> = {};

// Generate mock availability for the next 30 days
const generateMockAvailability = () => {
  const today = new Date();

  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateStr = date.toISOString().split("T")[0];

    // Skip weekends for this example
    if (date.getDay() === 0 || date.getDay() === 6) {
      mockAvailability[dateStr] = [];
      continue;
    }

    const slots: TimeSlot[] = [];

    // Generate slots from 9 AM to 5 PM
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 17 && minute > 0) break; // Stop at 5:00 PM

        const time24 = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        const ampm = hour >= 12 ? "PM" : "AM";
        const display = `${hour12}:${minute
          .toString()
          .padStart(2, "0")} ${ampm}`;

        // Randomly make some slots unavailable for demo
        const available = Math.random() > 0.3;

        slots.push({
          time: time24,
          display,
          available,
        });
      }
    }

    mockAvailability[dateStr] = slots;
  }
};

// Initialize mock data
generateMockAvailability();

export default function AppointmentPicker({
  isOpen,
  onClose,
  onSelect,
  selectedDate,
  selectedTime,
}: AppointmentPickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDateState, setSelectedDateState] = useState(
    selectedDate || ""
  );
  const [hoveredDate, setHoveredDate] = useState("");

  useEffect(() => {
    if (selectedDate) {
      setSelectedDateState(selectedDate);
    }
  }, [selectedDate]);

  if (!isOpen) return null;

  const today = new Date();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const isDateAvailable = (date: Date) => {
    const dateStr = formatDate(date);
    const slots = mockAvailability[dateStr] || [];
    return slots.some((slot) => slot.available);
  };

  const isDateInCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const isDatePast = (date: Date) => {
    return date < today;
  };

  const handleDateSelect = (date: Date) => {
    if (isDatePast(date) || !isDateAvailable(date)) return;

    const dateStr = formatDate(date);
    setSelectedDateState(dateStr);
  };

  const handleTimeSelect = (timeSlot: TimeSlot) => {
    if (!timeSlot.available || !selectedDateState) return;

    onSelect(selectedDateState, timeSlot.time);
    onClose();
  };

  const renderCalendarDays = () => {
    const days = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      const date = new Date(currentDate);
      const dateStr = formatDate(date);
      const isSelected = dateStr === selectedDateState;
      const isHovered = dateStr === hoveredDate;
      const isAvailable = isDateAvailable(date);
      const isInCurrentMonth = isDateInCurrentMonth(date);
      const isPast = isDatePast(date);
      const isToday = formatDate(date) === formatDate(today);

      days.push(
        <button
          key={dateStr}
          type="button"
          onClick={() => handleDateSelect(date)}
          onMouseEnter={() => setHoveredDate(dateStr)}
          onMouseLeave={() => setHoveredDate("")}
          disabled={isPast || !isAvailable}
          className={`
            relative h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200
            ${
              isSelected
                ? "bg-teal-600 text-white shadow-lg"
                : isHovered && isAvailable && !isPast
                ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                : isToday && isAvailable && !isPast
                ? "bg-stone-100 dark:bg-stone-800 text-teal-600 dark:text-teal-400 ring-2 ring-teal-500"
                : isAvailable && !isPast
                ? "text-stone-900 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800"
                : "text-stone-400 dark:text-stone-600 cursor-not-allowed"
            }
            ${!isInCurrentMonth ? "opacity-40" : ""}
          `}
        >
          {date.getDate()}
          {isAvailable && !isPast && (
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full" />
          )}
        </button>
      );

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  const selectedDateSlots = selectedDateState
    ? mockAvailability[selectedDateState] || []
    : [];
  const availableSlots = selectedDateSlots.filter((slot) => slot.available);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-4xl mx-2 sm:mx-0 bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] sm:max-h-none flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Sticky */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
              Schedule Your Consultation
            </h2>
            <p className="text-stone-600 dark:text-stone-400 mt-1 text-sm sm:text-base">
              Select a date and time that works for you
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <Icon
              icon="mdi:close"
              className="w-6 h-6 text-stone-600 dark:text-stone-400"
            />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Calendar Section */}
          <div className="flex-1 p-4 sm:p-6 lg:border-r border-stone-200 dark:border-stone-700 overflow-y-auto">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                {monthName}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  <Icon
                    icon="mdi:chevron-left"
                    className="w-5 h-5 text-stone-600 dark:text-stone-400"
                  />
                </button>
                <button
                  onClick={goToNextMonth}
                  className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  <Icon
                    icon="mdi:chevron-right"
                    className="w-5 h-5 text-stone-600 dark:text-stone-400"
                  />
                </button>
              </div>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="h-8 sm:h-10 flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                    {day}
                  </span>
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-6 text-xs text-stone-600 dark:text-stone-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-teal-500" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-stone-300 dark:bg-stone-600" />
                <span>Unavailable</span>
              </div>
            </div>
          </div>

          {/* Time Slots Section */}
          <div className="w-full lg:w-80 p-4 sm:p-6 border-t lg:border-t-0 border-stone-200 dark:border-stone-700 overflow-y-auto">
            {selectedDateState ? (
              <>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
                  Available Times
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mb-6">
                  {new Date(selectedDateState + "T00:00:00").toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>

                {availableSlots.length > 0 ? (
                  <div className="space-y-2 max-h-64 sm:max-h-96 overflow-y-auto">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => handleTimeSelect(slot)}
                        className={`
                          w-full p-3 rounded-xl border text-left transition-all duration-200
                          ${
                            selectedTime === slot.time
                              ? "bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300"
                              : "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700"
                          }
                        `}
                      >
                        <div className="font-medium">{slot.display}</div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                          30 minute consultation
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Icon
                      icon="mdi:calendar-remove"
                      className="w-12 h-12 text-stone-400 dark:text-stone-600 mx-auto mb-3"
                    />
                    <p className="text-stone-600 dark:text-stone-400">
                      No available times for this date
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <Icon
                  icon="mdi:calendar-clock"
                  className="w-12 sm:w-16 h-12 sm:h-16 text-stone-400 dark:text-stone-600 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  Select a Date
                </h3>
                <p className="text-stone-600 dark:text-stone-400">
                  Choose a date from the calendar to see available times
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
