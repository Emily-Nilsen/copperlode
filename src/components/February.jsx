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
  { date: '2024-01-29' },
  { date: '2024-01-30' },
  { date: '2024-01-31' },
  {
    date: '2024-02-01',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-02-02',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-02-03',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Katie Richards Live Music',
  },
  {
    date: '2024-02-04',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  { date: '2024-02-05', isCurrentMonth: true },
  { date: '2024-02-06', isCurrentMonth: true },
  { date: '2024-02-07', isCurrentMonth: true },
  {
    date: '2024-02-08',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-02-09',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-02-10',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Tim Smith Live Music',
  },
  {
    date: '2024-02-11',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  { date: '2024-02-12', isCurrentMonth: true },
  { date: '2024-02-13', isCurrentMonth: true },
  { date: '2024-02-14', isCurrentMonth: true },
  {
    date: '2024-02-15',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-02-16',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-02-17',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-02-18',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  { date: '2024-02-19', isCurrentMonth: true },
  { date: '2024-02-20', isCurrentMonth: true },
  { date: '2024-02-21', isCurrentMonth: true },
  {
    date: '2024-02-22',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-02-23',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-02-24',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-02-25',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  { date: '2024-02-26', isCurrentMonth: true },
  { date: '2024-02-27', isCurrentMonth: true },
  { date: '2024-02-28', isCurrentMonth: true },
  {
    date: '2024-02-29',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-03-01',
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  { date: '2024-03-02', isSelected: true, tooltip: 'TBC' },
  { date: '2024-03-03', isSelected: true, tooltip: 'TBC' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function February() {
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
