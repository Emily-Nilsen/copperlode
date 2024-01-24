import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { November } from './November';
import { December } from './December';
import { January } from './January';
import { February } from './February';

export function CalendarView() {
  // Set initial month to January 2024
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 0));

  const handlePrevMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    if (month === 0) {
      // Go back to December of the previous year
      setCurrentMonth(new Date(year - 1, 11));
    } else {
      // Go back to the previous month
      setCurrentMonth(new Date(year, month - 1));
    }
  };

  const handleNextMonth = () => {
    // Adjust for January and February of 2024
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    if (month === 11) {
      setCurrentMonth(new Date(year + 1, 0)); // Go to January next year
    } else {
      setCurrentMonth(new Date(year, month + 1)); // Go to next month
    }
  };

  const renderMonthComponent = () => {
    switch (currentMonth.getMonth()) {
      case 10: // November
        return <November />;
      case 11: // December
        return <December />;
      case 0: // January
        return <January />;
      case 1: // February
        return <February />;
      default:
        return null;
    }
  };

  // Disable right chevron in February 2024
  const isFebruary2024 =
    currentMonth.getMonth() === 1 && currentMonth.getFullYear() === 2024;

  return (
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9">
      <div className="flex items-center text-white">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          disabled={
            currentMonth.getFullYear() === 2023 && currentMonth.getMonth() <= 10
          }
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="flex-auto text-base font-semibold">
          {currentMonth.toLocaleString('default', { month: 'long' })}{' '}
          {currentMonth.getFullYear()}
        </div>
        <button
          type="button"
          onClick={handleNextMonth}
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          disabled={isFebruary2024}
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <div className="grid grid-cols-7 mt-6 text-sm leading-6 text-gray-400 lg:text-base">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      {renderMonthComponent()}
      <div className="w-full px-3 py-2 mt-4 mb-12 text-base font-semibold text-left text-white lg:mt-6">
        <p className="lg:hidden">Tap on a calendar date to view the event.</p>
        <p className="hidden lg:block">
          Hover over or click on a calendar date to view the event.
        </p>
      </div>
    </div>
  );
}
