import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {
  BuildingStorefrontIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { EventCalendar } from '@/components/EventCalendar';

export default function Calendar() {
  return (
    <>
      <Head>
        <title>Upcoming Events at Copperlode Brewing Co.</title>
        <meta
          name="description"
          content="Upcoming events at Copperlode Brewing Co. in Cairns, Far North Queensland, Australia."
        />
        <link
          rel="canonical"
          href="https://www.copperlodebrewing.com.au/calendar"
          key="canonical"
        />
      </Head>
      <div className="relative z-0 bg-gray-950 isolate">
        <div className="grid grid-cols-1 pt-20 mx-auto max-w-7xl lg:grid-cols-2">
          <div className="relative z-20 px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:pt-48">
            <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 w-full overflow-hidden ring-1 ring-white/5"></div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Copperlode Calendar
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Find a list of our upcoming live music, food trucks, trivia
                nights and more.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-20">
          <EventCalendar />
        </div>
        <div className="sm:hidden">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/hero_mobile_dxlfbz.webp"
            alt="Copperlod Brewery Co., Far North Queensland, Australia"
            width={1500}
            height={945}
            className="absolute inset-0 object-cover w-full h-full -z-10"
          />
        </div>
        <div className="z-0 hidden sm:block">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/hero_placeholder_piqua8.webp"
            alt="Copperlod Brewery Co., Far North Queensland, Australia"
            width={2500}
            height={1326}
            className="absolute inset-0 object-cover w-full h-full -z-10"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gray-950/80" />
        <div className="absolute bottom-0 z-0 w-full lg:h-40 h-28 bg-gradient-to-t from-gray-950" />
      </div>
    </>
  );
}
