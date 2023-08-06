import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import { CaneToadIcon } from './Logos';
import { MusicIcon } from './Logos';

export function UpcomingEvents() {
  return (
    <div
      id="upcomingEvents"
      className="py-24 overflow-hidden bg-gray-950 sm:py-32"
    >
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Upcoming Events
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Here are some upcoming events at Copperlode Brewing Co. you don
                <span className="font-['blanket']">’</span>t want to miss:
              </p>
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-bold text-white">
                    <MusicIcon
                      className="absolute w-5 h-5 fill-copper left-1 top-1"
                      aria-hidden="true"
                    />
                    Live Music
                  </dt>{' '}
                  <div className="flex flex-col">
                    <dd className="inline">Fridays: 6pm - 9pm</dd>
                    <dd className="inline">Saturdays: 6pm - 9pm</dd>
                    <dd className="inline">Sundays: 1pm - 4pm</dd>
                  </div>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-bold text-white">
                    <CaneToadIcon
                      className="absolute w-5 h-5 fill-copper left-1 top-1"
                      aria-hidden="true"
                    />
                    Fun Thursdays
                  </dt>{' '}
                  <div className="flex flex-col">
                    <dd className="inline">
                      Join us for exciting events like trivia, music bingo, and
                      even cane toad races!
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/sugarcane_toad_race_upscayl_4x_realesrgan-x4plus_copy_dj6d4o.webp"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
