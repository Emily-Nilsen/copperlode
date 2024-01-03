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
  { date: '2024-01-01', isCurrentMonth: true },
  { date: '2024-01-02', isCurrentMonth: true },
  { date: '2024-01-03', isCurrentMonth: true },
  {
    date: '2024-01-04',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-01-05',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts Tournament',
  },
  {
    date: '2024-01-06',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Steve Roberts Live Music',
  },
  {
    date: '2024-01-07',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Spotify Tunes / Taproom Radio',
  },
  { date: '2024-01-08', isCurrentMonth: true },
  { date: '2024-01-09', isCurrentMonth: true },
  { date: '2024-01-10', isCurrentMonth: true },
  {
    date: '2024-01-11',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Trivia with DJ Todd Skipper',
  },
  {
    date: '2024-01-12',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Copperlode Darts Tournament',
  },
  {
    date: '2024-01-13',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Spotify Tunes / Taproom Radio',
  },
  {
    date: '2024-01-14',
    isCurrentMonth: true,
    isSelected: true,
    tooltip: 'Lady Valiant',
  },
  { date: '2024-01-15', isCurrentMonth: true },
  { date: '2024-01-16', isCurrentMonth: true },
  { date: '2024-01-17', isCurrentMonth: true },
  { date: '2024-01-18', isCurrentMonth: true },
  { date: '2024-01-19', isCurrentMonth: true },
  { date: '2024-01-20', isCurrentMonth: true },
  { date: '2024-01-21', isCurrentMonth: true },
  { date: '2024-01-22', isCurrentMonth: true },
  { date: '2024-01-23', isCurrentMonth: true },
  { date: '2024-01-24', isCurrentMonth: true },
  { date: '2024-01-25', isCurrentMonth: true },
  { date: '2024-01-26', isCurrentMonth: true },
  { date: '2024-01-27', isCurrentMonth: true },
  { date: '2024-01-28', isCurrentMonth: true },
  { date: '2024-01-29', isCurrentMonth: true },
  { date: '2024-01-30', isCurrentMonth: true },
  { date: '2024-01-31', isCurrentMonth: true },
  { date: '2024-02-01' },
  { date: '2024-02-02' },
  { date: '2024-02-03' },
  { date: '2024-02-04' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function January() {
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
