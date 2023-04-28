import Image from 'next/image';
import Link from 'next/link';

import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { HopLogo } from '@/components/Logos';

const benefits = [
  'Located in Far North Queensland’s rainforest',
  'Meticulously crafted brewing process for the perfect balance of flavours and aromas',
  'Crafted with premium ingredients for an unforgettable beer experience',
];

export function AboutUsSection() {
  return (
    <div className="py-24 bg-gray-950 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col max-w-2xl gap-16 px-6 py-16 mx-auto bg-copper/5 ring-1 ring-copper/20 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              width={640}
              height={640}
              className="flex-none object-cover w-full shadow-xl h-96 rounded-2xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Copperlode_Dam_khnnra.jpg"
              alt=""
            />
            <div className="flex-auto w-full">
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                Pure water, perfect beer
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We brew exceptional craft beer with pristine water from
                Copperlode Dam and the finest ingredients. Come and visit us and
                discover the unique taste of Copperlode Brewery Co. beers.
              </p>
              <ul
                role="list"
                className="grid grid-cols-1 mt-10 text-base leading-7 text-white gap-x-8 gap-y-3"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <HopLogo
                      className="flex-none w-5 fill-copper"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="flex mt-10">
                <Link
                  href="/about-us"
                  className="text-sm font-semibold leading-6 text-copper"
                >
                  Read our story <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 flex justify-center overflow-hidden -top-16 -z-10 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-copper to-copper/50 opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
