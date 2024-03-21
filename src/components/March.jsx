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

// January days
const days = [
  { date: '2024-02-26' },
  { date: '2024-02-27' },
  { date: '2024-02-28' },
  {
    date: '2024-02-29',
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-03-01',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-03-02',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-03-03',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  { date: '2024-03-04', isCurrentMonth: true },
  { date: '2024-03-05', isCurrentMonth: true },
  { date: '2024-03-06', isCurrentMonth: true },
  {
    date: '2024-03-07',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-03-08',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-03-09',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Tim Smith Live Music',
  },
  {
    date: '2024-03-10',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  { date: '2024-03-11', isCurrentMonth: true },
  { date: '2024-03-12', isCurrentMonth: true },
  { date: '2024-03-13', isCurrentMonth: true },
  {
    date: '2024-03-14',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-03-15',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-03-16',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Stax o ’ Wax',
  },
  {
    date: '2024-03-17',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Live Music Sunday Session',
  },
  { date: '2024-03-18', isCurrentMonth: true },
  { date: '2024-03-19', isCurrentMonth: true },
  { date: '2024-03-20', isCurrentMonth: true },
  {
    date: '2024-03-21',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-03-22',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-03-23',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Stand Up Comedy Night',
  },
  {
    date: '2024-03-24',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Live Music Sunday Session',
  },
  { date: '2024-03-25', isCurrentMonth: true },
  { date: '2024-03-26', isCurrentMonth: true },
  { date: '2024-03-27', isCurrentMonth: true },
  {
    date: '2024-03-28',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-03-29',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Closed for Good Friday',
  },
  {
    date: '2024-03-30',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-03-31',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Live Music Sunday Session',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function March() {
  // Convert event dates to a set for efficient lookup
  const eventDates = new Set(events.map((event) => event.date));

  return (
    <div className="relative grid grid-cols-7 gap-px mt-2 text-base bg-gray-700 rounded-lg shadow lg:text-base isolate ring-1 ring-white/20">
      {days.map((day, dayIdx) => (
        <Fragment key={dayIdx}>
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
