import Image from 'next/image';
import Link from 'next/link';
import { Map } from '@/components/Map';

import { ClockEightIcon } from './Logos';
import { ClockNineIcon } from './Logos';
import { ClockTenIcon } from './Logos';
import { CarIcon } from './Logos';
import { BusIcon } from './Logos';

const openingHours = [
  // {
  //   name: 'Thursday:',
  //   description: '4pm - late',
  //   icon: <ClockNineIcon className="absolute w-4 fill-copper left-1 top-1" />,
  // },
  {
    name: 'Thursday to Sunday:',
    description: '12pm - late',
    icon: <ClockTenIcon className="absolute w-4 fill-copper left-1 top-1" />,
  },
  // {
  //   name: 'Saturday:',
  //   description: '12pm - late',
  //   icon: <ClockTenIcon className="absolute w-4 fill-copper left-1 top-1" />,
  // },
  // {
  //   name: 'Sunday:',
  //   description: '12pm - 10pm',
  //   icon: <ClockEightIcon className="absolute w-4 fill-copper left-1 top-1" />,
  // },
];

const directions = [
  {
    name: 'By car:',
    description:
      'Located at 1B Hargreaves St, Edmonton, the tavern is a short drive from Cairns city centre.',
    icon: <CarIcon className="absolute w-4 fill-copper left-1 top-1" />,
  },
  {
    name: 'By public transport:',
    description:
      'The Sunbus runs regular services from Cairns city centre to the nearby Mill Road in Edmonton within walking distance of the tavern.',
    icon: <BusIcon className="absolute w-4 fill-copper left-1 top-1" />,
  },
];

export function VisitUsSection() {
  return (
    <section id="visit-us">
      <div className="sm:py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative px-6 py-20 overflow-hidden isolate bg-gray-950 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h1 className="text-3xl font-bold text-white sm:text-4xl">
                  Visit us
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Copperlode Brewery Co.
                  <span className="font-['blanket']">’</span>s tavern and bar
                  offer a welcoming and relaxed atmosphere for customers to
                  enjoy their craft beer and tasty meals. Come and join us!
                </p>
              </div>
              <div className="relative min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-copper/20 lg:row-span-4 lg:w-[64rem] lg:max-w-none sm:h-full object-cover h-60">
                <Map />
              </div>

              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  <h2 className="text-2xl text-white">Opening hours</h2>
                  {openingHours.map((detail) => (
                    <div key={detail.name} className="relative">
                      <dt className="inline-block font-semibold text-white ml-9">
                        {detail.icon}
                        {detail.name}
                      </dt>{' '}
                      <dd className="inline">{detail.description}</dd>
                    </div>
                  ))}
                  <h2 className="text-2xl text-white">How to get there</h2>
                  {directions.map((detail) => (
                    <div key={detail.name} className="relative">
                      <dt className="inline-block font-semibold text-white ml-9">
                        {detail.icon}
                        {detail.name}
                      </dt>{' '}
                      <dd className="inline">{detail.description}</dd>
                    </div>
                  ))}
                </dl>

                {/* Call us */}
                {/* <div className="flex mt-10">
                <Link
                  href="/about-us"
                  className="text-sm font-semibold leading-6 text-copper"
                >
                  Call us <span aria-hidden="true">&rarr;</span>
                </Link>
              </div> */}
              </div>
            </div>
            <div
              className="absolute -translate-y-1/2 pointer-events-none left-12 top-1/2 -z-10 transform-gpu blur-3xl lg:bottom-0 lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-copper to-copper/50 opacity-25"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
