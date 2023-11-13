import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { November } from './November';
import { December } from './December';

export function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 10)); // November 2023

  const handlePrevMonth = () => {
    if (currentMonth.getMonth() > 10) {
      setCurrentMonth(new Date(2023, 10));
    }
  };

  const handleNextMonth = () => {
    if (currentMonth.getMonth() < 11) {
      setCurrentMonth(new Date(2023, 11));
    }
  };

  const renderMonthComponent = () => {
    return currentMonth.getMonth() === 10 ? <November /> : <December />;
  };

  return (
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9">
      <div className="flex items-center text-white">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          disabled={currentMonth.getMonth() <= 10}
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
          disabled={currentMonth.getMonth() >= 11}
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
