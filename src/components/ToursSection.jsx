import Image from 'next/image';
import Link from 'next/link';

import { Button } from './Button';

import { WheatIcon } from './Logos';
import { BuildingWheatIcon } from './Logos';
import { BeerMugIcon } from './Logos';

const features = [
  {
    name: 'Learn.',
    description:
      'Learn about the unique brewing process, the history of our brewery, and our passion for crafting beers',
    icon: <WheatIcon className="absolute w-5 fill-copper left-1 top-1" />,
  },
  {
    name: 'Experience.',
    description:
      'An immersive experience with behind-the-scenes access to the brewery',
    icon: (
      <BuildingWheatIcon className="absolute w-5 fill-copper left-1 top-1" />
    ),
  },
  {
    name: 'Tasting.',
    description: 'Tasting of our signature beers',
    icon: <BeerMugIcon className="absolute w-5 fill-copper left-1 top-1" />,
  },
  // {
  //   name: 'Questions.',
  //   description:
  //     'Opportunity to ask questions and interact with knowledgeable staff',
  //   icon: FingerPrintIcon,
  // },
];

export function ToursSection() {
  return (
    <section id="tours">
      <div className="py-24 bg-gray-950 sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-copper">
              Brewery Tours
            </h2>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              A guided journey through our brewery
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore the inner workings of Copperlode Brewery Co. with guided
              tours booked through Cairns Brewery Tours and conducted by Conrad.
              Discover our unique brewing process, delve into the brewery
              <span className="font-['blanket']">’</span>s history, and
              experience our unwavering passion for crafting exceptional beer.
            </p>
          </div>
        </div>
        <div className="relative pt-16 overflow-hidden">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/posts/IMG_4978_je279h.webp"
              alt="Copperlode Brewery"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2500}
              height={1686}
              loading="lazy"
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-950 pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="px-6 mx-auto mt-16 max-w-7xl sm:mt-20 md:mt-24 lg:px-8">
          <dl className="grid max-w-2xl grid-cols-1 mx-auto text-base leading-7 text-gray-300 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  {feature.icon}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="flex justify-center mt-10">
            <Button
              target="_blank"
              rel="noopener noreferrer"
              href="https://brewerytourscairns.com.au/"
            >
              Book a tour with Cairns Brewery Tours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
