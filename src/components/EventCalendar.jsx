import { Fragment, useState } from 'react';
import Image from 'next/image';
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TruckIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import { CalendarView } from './CalendarView';
import { events } from '../../assets/eventsData';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function EventCalendar() {
  const currentDate = new Date();

  return (
    <div className="relative z-10 px-6 pb-6 mx-auto max-w-7xl lg:px-8 lg:pb-24">
      <h2 className="text-lg font-semibold leading-6 text-white">
        Upcoming events
      </h2>
      <div className="relative lg:grid lg:grid-cols-12 lg:gap-x-16">
        {/* <CalendarView /> */}

        <ol className="mt-4 text-base leading-6 divide-y divide-white/10 lg:col-span-7">
          {events
            .filter((event) => {
              const eventDate = new Date(event.date);
              const yesterday = new Date(
                currentDate.getTime() - 24 * 60 * 60 * 1000
              );
              return eventDate > yesterday;
            })
            .map((event) => (
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
                        <div>
                          {event.dateText} at {event.time}
                        </div>
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
