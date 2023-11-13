import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="relative overflow-hidden isolate pt-14">
        {/* Mobile */}
        <div className="sm:hidden">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/hero_mobile_dxlfbz.webp"
            alt="Copperlode Brewery Co., Craft Brewery in Cairns, Australia"
            width={1500}
            height={945}
            className="absolute inset-0 object-cover w-full h-full -z-10"
            unoptimized
            priority
          />
        </div>
        {/* Desktop */}
        <div className="hidden sm:block">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/hero_placeholder_piqua8.webp"
            alt="Copperlode Brewery Co., Craft Brewery in Cairns, Australia"
            width={2500}
            height={1326}
            className="absolute inset-0 object-cover w-full h-full -z-10"
            unoptimized
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gray-950/70" />
        <div className="absolute bottom-0 w-full lg:h-40 h-28 bg-gradient-to-t from-gray-950" />

        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-copper to-white opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <Container>
          <div className="relative z-10 max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative px-3 py-1 text-sm leading-6 text-gray-300 rounded-full ring-1 ring-white/10 hover:ring-white/20">
                Announcing our new range of craft beers.{' '}
                <Link href="/our-beers" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h5 className="font-bold text-white text-7xl sm:text-9xl">
                Copperlode
              </h5>
              <h1 className="text-4xl font-bold text-white sm:text-6xl">
                Brewing Co.
              </h1>
              <p className="max-w-xs mx-auto mt-6 text-lg leading-8 text-gray-300 sm:max-w-lg">
                Craft beer from the heart of the rainforest, brewed with
                pristine water from Copperlode Dam.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <Button href="/our-beers">Discover our beers</Button>
                <Link
                  href="#upcomingEvents"
                  className="text-sm font-semibold leading-6 text-white transition duration-300 ease-in-out hover:text-copper"
                >
                  Upcoming events <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-copper to-white opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
