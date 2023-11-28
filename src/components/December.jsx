import { Fragment } from 'react';
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import { events } from '../../assets/eventsData';

const days = [
  // November days
  { date: '2023-11-27' },
  { date: '2023-11-28' },
  { date: '2023-11-29' },
  {
    date: '2023-11-30',
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  // December days with isCurrentMonth: true
  {
    date: '2023-12-01',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Joseph Lanskey',
  },
  {
    date: '2023-12-02',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Savidas',
  },
  {
    date: '2023-12-03',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Dave Cooke / Art Exhibition',
  },
  { date: '2023-12-04', isCurrentMonth: true },
  { date: '2023-12-05', isCurrentMonth: true },
  { date: '2023-12-06', isCurrentMonth: true },
  {
    date: '2023-12-07',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2023-12-08',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Danny Bani',
  },
  {
    date: '2023-12-09',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Matt Gerdes',
  },
  {
    date: '2023-12-10',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Dave Cooke',
  },
  { date: '2023-12-11', isCurrentMonth: true },
  { date: '2023-12-12', isCurrentMonth: true },
  { date: '2023-12-13', isCurrentMonth: true },
  {
    date: '2023-12-14',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2023-12-15',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Tim Smith',
  },
  {
    date: '2023-12-16',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Joseph Lanskey',
  },
  {
    date: '2023-12-17',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Katie Richards',
  },
  { date: '2023-12-18', isCurrentMonth: true },
  { date: '2023-12-19', isCurrentMonth: true },
  { date: '2023-12-20', isCurrentMonth: true },
  {
    date: '2023-12-21',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2023-12-22',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Jimmy James',
  },
  {
    date: '2023-12-23',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Danny Bani',
  },
  {
    date: '2023-12-24',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Musician TBC',
  },
  { date: '2023-12-25', isCurrentMonth: true },
  { date: '2023-12-26', isCurrentMonth: true },
  { date: '2023-12-27', isCurrentMonth: true },
  { date: '2023-12-28', isCurrentMonth: true },
  { date: '2023-12-29', isCurrentMonth: true },
  { date: '2023-12-30', isCurrentMonth: true },
  { date: '2023-12-31', isCurrentMonth: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function December() {
  // Convert event dates to a set for efficient lookup
  const eventDates = new Set(events.map((event) => event.date));

  return (
    <div className="relative grid grid-cols-7 gap-px mt-2 text-base bg-gray-700 rounded-lg shadow lg:text-base isolate ring-1 ring-white/20">
      {days.map((day, dayIdx) => (
        <Fragment key={day.date}>
          <button
            type="button"
            className={classNames(
              'py-1.5 hover:bg-gray-800 focus:z-10 group',
              day.isCurrentMonth ? 'bg-gray-950' : 'bg-gray-900',
              (day.isSelected || day.isToday) && 'font-semibold',
              day.isSelected && 'text-copper',
              !day.isSelected &&
                day.isCurrentMonth &&
                !day.isToday &&
                'text-white',
              !day.isSelected &&
                !day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-400',
              day.isToday && !day.isSelected && 'text-copper',
              dayIdx === 0 && 'rounded-tl-lg',
              dayIdx === 6 && 'rounded-tr-lg',
              dayIdx === days.length - 7 && 'rounded-bl-lg',
              dayIdx === days.length - 1 && 'rounded-br-lg'
            )}
          >
            <time
              dateTime={day.date}
              className={classNames(
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                day.isSelected && day.isToday && 'bg-copper',
                day.isSelected &&
                  !day.isToday &&
                  'bg-gray-900 ring-1 ring-copper/50'
              )}
            >
              {day.date.split('-').pop().replace(/^0/, '')}
            </time>
            {/* The tooltip content */}
            {day.tooltip && (
              <div className="absolute z-50 px-3 py-2 -ml-12 text-base text-white transition-opacity duration-300 border rounded-lg opacity-0 pointer-events-none -mt-14 group-hover:opacity-100 bg-copper border-white/30">
                {day.tooltip}
              </div>
            )}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
