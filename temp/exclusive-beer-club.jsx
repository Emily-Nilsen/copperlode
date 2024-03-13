import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { BeerSubscriptionHeader } from '../src/components/BeerSubscriptionHeader';
import { BeerSubscriptionIncentives } from '../src/components/BeerSubscriptionIncentives';
import { BeerSubscriptionFeatures } from '../src/components/BeerSubscriptionFeatures';
import { WaitingList } from '../src/components/WaitingList';
import { BarleyLogo } from '@/components/Logos';
import { HopLogo } from '@/components/Logos';
import { DeleteMe } from '../src/components/DeleteMe';

export default function Subscription() {
  return (
    <>
      <Head>
        <title>Subscription Services</title>
        <meta name="description" content="" />
        <link
          rel="canonical"
          href="https://copperlodebrewing.com.au/subscription"
          key="canonical"
        />
      </Head>
      <div className="bg-gray-950">
        <main className="isolate">
          {/* Hero section */}
          <div className="relative isolate -z-10">
            <div
              className="absolute top-0 right-0 -ml-24 overflow-hidden left-1/2 -z-10 transform-gpu blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-copper to-copper/80 opacity-30"
                style={{
                  clipPath:
                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                }}
              />
            </div>
            <div className="overflow-hidden ">
              <div className="px-6 pb-32 mx-auto max-w-7xl pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <BeerSubscriptionHeader />
                <div className="flex items-center justify-center w-full pt-10 bg-transparent">
                  <BarleyLogo className="h-6 lg:h-12 fill-white" />
                </div>
                <BeerSubscriptionFeatures />
                <BeerSubscriptionIncentives />
                <div className="flex items-center justify-center w-full pt-0 bg-transparent">
                  <HopLogo className="h-6 lg:h-12 fill-white" />
                </div>
                <DeleteMe />
                {/* <WaitingList /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
