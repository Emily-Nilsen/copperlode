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

// April 2024 days and events
const days = [
  { date: '2024-04-01', isCurrentMonth: true },
  { date: '2024-04-02', isCurrentMonth: true },
  {
    date: '2024-04-03',
    isCurrentMonth: true,
  },
  {
    date: '2024-04-04',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-04-05',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-04-06',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-04-07',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Live Music Sunday Session',
  },
  { date: '2024-04-08', isCurrentMonth: true },
  { date: '2024-04-09', isCurrentMonth: true },
  {
    date: '2024-04-10',
    isCurrentMonth: true,
  },
  {
    date: '2024-04-11',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-04-12',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-04-13',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-04-14',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Live Music Sunday Session',
  },
  { date: '2024-04-15', isCurrentMonth: true },
  { date: '2024-04-16', isCurrentMonth: true },
  { date: '2024-04-17', isCurrentMonth: true },
  {
    date: '2024-04-18',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-04-19',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-04-20',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-04-21',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Live Music Sunday Session',
  },
  { date: '2024-04-22', isCurrentMonth: true },
  { date: '2024-04-23', isCurrentMonth: true },
  { date: '2024-04-24', isCurrentMonth: true },
  {
    date: '2024-04-25',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-04-26',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-04-27',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-04-28',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Live Music Sunday Session',
  },
  { date: '2024-04-29', isCurrentMonth: true },
  {
    date: '2024-04-30',
    isCurrentMonth: true,
  },
  { date: '2024-05-01', isCurrentMonth: false },
  {
    date: '2024-05-02',
    isCurrentMonth: false,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-05-03',
    isCurrentMonth: false,
    isSelected: true,
    tooltip: 'Copperlode Darts & Draughts Competition',
  },
  {
    date: '2024-05-04',
    isCurrentMonth: false,
    isSelected: true,
    tooltip: 'TBC',
  },
  {
    date: '2024-05-05',
    isCurrentMonth: false,
    isSelected: true,
    tooltip: 'Live Music Sunday Session',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function April() {
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
