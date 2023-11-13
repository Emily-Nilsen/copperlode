import { Fragment, useState } from 'react';
import Image from 'next/image';
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TruckIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';

const events = [
  {
    id: 1,
    date: 'Thursday 30 Nov',
    time: '6:00 PM',
    datetime: '2023-11-30T18:00',
    name: 'Trivia with DJ Todd Skipper',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Todd_Skipper_crzt65.webp',
    foodTruck: 'Toasted Goat',
  },
  {
    id: 2,
    date: 'Friday 1 Dec',
    time: '6:00 PM',
    datetime: '2023-12-01T18:00',
    name: 'Joseph Lanskey',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Joey_Lanskey_jufbnf.webp',
    foodTruck: 'Outback Potato Van (official launch)',
  },
  {
    id: 3,
    date: 'Saturday 2 Dec',
    time: '6:00 PM',
    datetime: '2023-12-02T18:00',
    name: 'Closed from 6pm for a private function',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/placeholder_jzdida.webp',
    foodTruck: '',
  },
  {
    id: 4,
    date: 'Sunday 3 Dec',
    time: '6:00 PM',
    datetime: '2023-12-03T18:00',
    name: 'Dave Cooke',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Dave_Cooke_nnn5yr.webp',
    foodTruck: 'Hungry Nomad',
  },
  {
    id: 5,
    date: 'Thursday 7 Dec',
    time: '6:00 PM',
    datetime: '2023-12-07T18:00',
    name: 'Trivia with DJ Todd Skipper',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Todd_Skipper_crzt65.webp',
    foodTruck: 'Frying Dutchies',
  },
  {
    id: 6,
    date: 'Friday 8 Dec',
    time: '6:00 PM',
    datetime: '2023-12-08T18:00',
    name: 'Danny Bani',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Danny_Bani_wzh5tt.webp',
    foodTruck: 'Smoke N Steel',
  },
  {
    id: 7,
    date: 'Saturday 9 Dec',
    time: '6:00 PM',
    datetime: '2023-12-09T18:00',
    name: 'Matt Gerdes',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Matt_Gerdes_slv8gu.webp',
    foodTruck: 'To be confirmed',
  },
  {
    id: 8,
    date: 'Sunday 10 Dec',
    time: '6:00 PM',
    datetime: '2023-12-10T18:00',
    name: 'Dave Cooke',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Dave_Cooke_nnn5yr.webp',
    foodTruck: 'Toasted Goat',
  },
  {
    id: 9,
    date: 'Thursday 14 Dec',
    time: '6:00 PM',
    datetime: '2023-12-14T18:00',
    name: 'Trivia with DJ Todd Skipper',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Todd_Skipper_crzt65.webp',
    foodTruck: 'Duck & Felicas',
  },
  {
    id: 10,
    date: 'Friday 15 Dec',
    time: '6:00 PM',
    datetime: '2023-12-15T18:00',
    name: 'Closed from 6pm for a private function',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/placeholder_jzdida.webp',
    foodTruck: '',
  },
  {
    id: 11,
    date: 'Saturday 16 Dec',
    time: '6:00 PM',
    datetime: '2023-12-16T18:00',
    name: 'Joseph Lanskey',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Joey_Lanskey_jufbnf.webp',
    foodTruck: 'To be confirmed',
  },
  {
    id: 12,
    date: 'Sunday 17 Dec',
    time: '6:00 PM',
    datetime: '2023-12-17T18:00',
    name: 'Katie Richards',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Katie_Richards_xbdpkb.webp',
    foodTruck: 'Duck & Felicas',
  },
  {
    id: 13,
    date: 'Thursday 21 Dec',
    time: '6:00 PM',
    datetime: '2023-12-21T18:00',
    name: 'Trivia with DJ Todd Skipper',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Todd_Skipper_crzt65.webp',
    foodTruck: 'To be confirmed',
  },
  {
    id: 14,
    date: 'Friday 22 Dec',
    time: '6:00 PM',
    datetime: '2023-12-22T18:00',
    name: 'Jimmy James',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Jimmy_James_efdiez.webp',
    foodTruck: 'Hungry Nomad',
  },
  {
    id: 15,
    date: 'Saturday 23 Dec',
    time: '6:00 PM',
    datetime: '2023-12-23T18:00',
    name: 'Danny Bani',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Danny_Bani_wzh5tt.webp',
    foodTruck: 'To be confirmed',
  },
  {
    id: 16,
    date: 'Sunday 24 Dec',
    time: '6:00 PM',
    datetime: '2023-12-24T18:00',
    name: 'Daigo Kwik & Nikki Nassa',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Daigo_thumbnail_zqnjfc.webp',
    foodTruck: 'Nicks Souvlaki',
  },
  // More events...
];

const formatDate = (date) => {
  // Ensure that the date is converted to the local time zone before formatting
  const d = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return d.toISOString().split('T')[0];
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function EventCalendar() {
  // November 2023 as the initial month
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 10, 1));
  const [hoveredDate, setHoveredDate] = useState(null);

  // Function to find event by date
  const findEventByDate = (date) => {
    const formattedDate = formatDate(new Date(date));
    return events.find(
      (event) =>
        formatDate(new Date(event.datetime.split('T')[0])) === formattedDate
    );
  };

  // Function to add or subtract months
  const addMonths = (date, months) => {
    let d = new Date(date.valueOf());
    d.setMonth(d.getMonth() + months);
    return d;
  };

  // Function to generate calendar days for a given month
  const generateCalendarDays = (forMonth) => {
    let days = [];
    const year = forMonth.getFullYear();
    const month = forMonth.getMonth();

    // Find out the first day of the month
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Find out how many days there are in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Calculate days to prepend from the previous month to make the first day of the current month
    // align with the correct day of the week
    const daysFromPrevMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    // Add days from the previous month
    const prevMonthYear = month === 0 ? year - 1 : year;
    const prevMonth = month === 0 ? 11 : month - 1;
    const daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate();
    for (let i = daysFromPrevMonth; i > 0; i--) {
      days.push({
        date: `${prevMonthYear}-${prevMonth + 1}-${daysInPrevMonth - i + 1}`,
        isCurrentMonth: false,
      });
    }

    // Add days for the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: `${year}-${month + 1}-${i}`,
        isCurrentMonth: true,
      });
    }

    // Calculate days to append from the next month
    const totalDays = days.length;
    const rows = Math.ceil(totalDays / 7);
    const daysFromNextMonth = rows * 7 - totalDays;

    // Add days for the next month
    for (let i = 1; i <= daysFromNextMonth; i++) {
      days.push({
        date: `${year}-${month + 2}-${i}`,
        isCurrentMonth: false,
      });
    }

    // Ensure the date strings include leading zeros for single-digit months and days
    const zeroPad = (num, places) => String(num).padStart(places, '0');

    // Now, you need to add logic to identify the events for the days from the previous and next months
    const formattedEventDates = events.map((event) => {
      // Make sure that the event's datetime attribute is correct and properly formatted
      const [datePart] = event.datetime.split('T');
      return datePart;
    });

    return days.map((day) => {
      const dayDate = new Date(day.date);
      const formattedDayDate = formatDate(dayDate);
      return {
        ...day,
        // Check if there's an event for this day
        hasEvent: formattedEventDates.includes(formattedDayDate),
      };
    });
  };

  const decemberDays = generateCalendarDays(currentMonth);

  // Check if a day has an event
  const dayHasEvent = (date) =>
    events.some((event) => event.datetime.startsWith(date));

  // This function updates the currentMonth state to the new month, either forward or backward
  const navigateMonth = (offset) => {
    const newMonth = addMonths(currentMonth, offset);
    setCurrentMonth(newMonth);
  };

  // Event handlers for month navigation
  const handlePrevMonth = () => {
    if (currentMonth.getMonth() > 10) {
      // Prevents navigating to months before November 2023
      navigateMonth(-1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth.getMonth() < 11) {
      // Prevents navigating to months after December 2023
      navigateMonth(1);
    }
  };

  return (
    <div className="relative z-10 px-6 pb-6 mx-auto max-w-7xl lg:px-8 lg:pb-24">
      <h2 className="text-base font-semibold leading-6 text-white">
        Upcoming events
      </h2>
      <div className="relative lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="relative z-10 mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-8">
          <div className="relative z-30 flex items-center text-white">
            <button
              onClick={handlePrevMonth}
              disabled={currentMonth.getMonth() <= 10} // Disable if current month is November
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-copper hover:text-white/80"
            >
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex-auto text-sm font-semibold">
              <div className="month-name">
                {currentMonth.toLocaleString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
            </div>

            <button
              onClick={handleNextMonth}
              disabled={currentMonth.getMonth() >= 11} // Disable if current month is December
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-copper hover:text-white/80"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          <div className="grid grid-cols-7 mt-6 text-xs leading-6 text-white/80">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="grid grid-cols-7 gap-px mt-2 text-sm bg-gray-800 rounded-lg shadow isolate ring-1 ring-white/30">
            {decemberDays.map((day, dayIdx) => {
              const dayNumber = parseInt(day.date.split('-')[2], 10);
              const eventForDay = findEventByDate(day.date); // Find event for the day
              return (
                <button
                  key={day.date}
                  type="button"
                  onMouseEnter={() => setHoveredDate(day.date)} // Set hovered date
                  onMouseLeave={() => setHoveredDate(null)} // Clear hovered date
                  onClick={() => setHoveredDate(day.date)} // Set clicked date
                  className={classNames(
                    'py-1.5 hover:bg-white/5 focus:z-10',
                    day.isCurrentMonth
                      ? 'bg-gray-950 text-white'
                      : 'bg-gray-900 text-gray-500',
                    dayHasEvent(day.date) &&
                      day.isCurrentMonth &&
                      'text-copper',
                    dayIdx === 0 && 'rounded-tl-lg',
                    dayIdx === 6 && 'rounded-tr-lg',
                    dayIdx === decemberDays.length - 7 && 'rounded-bl-lg',
                    dayIdx === decemberDays.length - 1 && 'rounded-br-lg'
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                      day.hasEvent && 'ring-1 ring-white/30 text-copper' // Use the hasEvent property
                    )}
                  >
                    {dayNumber}
                  </time>
                  {hoveredDate === day.date &&
                    eventForDay && ( // Show event name on hover or click
                      <span className="absolute z-50 px-3 py-2 -mt-12 -ml-12 text-sm text-white transition-opacity duration-300 border rounded-lg opacity-100 pointer-events-none bg-copper border-white/30">
                        {eventForDay.name}
                      </span>
                    )}
                </button>
              );
            })}
          </div>
          <div className="w-full px-3 py-2 mt-4 mb-12 text-sm font-semibold text-left text-white lg:mt-6">
            <p className="lg:hidden">
              Tap on a calendar date to view the event.
            </p>
            <p className="hidden lg:block">
              Hover over or click on a calendar date to view the event.
            </p>
          </div>
        </div>
        <ol className="mt-4 text-sm leading-6 divide-y divide-white/10 lg:col-span-7">
          {events.map((event) => (
            <li
              key={event.id}
              className="relative flex py-6 space-x-6 xl:static"
            >
              <Image
                src={event.imageUrl}
                alt={event.name}
                className="flex-none object-cover object-center rounded-full h-14 w-14"
                width={300}
                height={300}
              />
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-white xl:pr-0">
                  {event.name}
                </h3>
                <dl className="flex flex-col mt-2 text-white/80 xl:flex-row">
                  <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Date</span>
                      <CalendarIcon
                        className="w-5 h-5 text-copper"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <time dateTime={event.datetime}>
                        {event.date} at {event.time}
                      </time>
                    </dd>
                  </div>
                  {event.foodTruck && (
                    <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-white/30 xl:border-opacity-50 xl:pl-3.5">
                      <dt className="mt-0.5">
                        <span className="sr-only">Food truck</span>
                        <TruckIcon
                          className="w-5 h-5 text-copper"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>{event.foodTruck}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
