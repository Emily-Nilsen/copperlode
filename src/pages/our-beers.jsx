import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { HopLogo } from '@/components/Logos';
import { SpacerBarley } from '@/components/SpacerBarley';
import { SpacerWater } from '@/components/SpacerWater';
import { SpacerHop } from '@/components/SpacerHop';
import { RiverLizardLager } from '../components/RiverLizardLager';
import { RedDustDraught } from '../components/RedDustDraught';
import { FiveKnotFever } from '../components/FiveKnotFever';
import { DoublePlugger } from '../components/DoublePlugger';

export default function OurBeers() {
  return (
    <>
      <Head>
        <title>Our Beers | Flavours of FNQ</title>
        <meta
          name="description"
          content="Tantalize your taste buds with our handcrafted beers inspired by the wonders of Far North Queensland."
        />
        <meta
          name="keywords"
          content="River Lizard Lager, Red Dust Draught, Five Knot Fever, Double Plugger XPA"
        />
        <link
          rel="canonical"
          href="https://copperlodebrewing.com.au/our-beers"
          key="canonical"
        />
      </Head>
      <div className="pt-36 bg-gray-950 sm:pt-52">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-base font-semibold leading-7 text-copper">
              Crafted with Passion, Inspired by FNQ
            </p>
            <h1 className="mt-2 text-4xl font-bold text-white sm:text-6xl">
              Our Craft Beers
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Immerse yourself in the flavours of Far North Queensland with our
              handcrafted beers. From the refreshing River Lizard Lager to the
              robust Red Dust Draught, all our beers are preservative-free and
              unpasteurised as part of our commitment to flavour and quality.
              From the moment our beer is racked into kegs, we cold-store them
              to ensure it stays fresh and tasty.
            </p>
          </div>
          <RiverLizardLager />
          <div className="flex items-center justify-center w-full bg-gray-950">
            <HopLogo className="h-6 lg:h-10 fill-white" />
          </div>
          <FiveKnotFever />
          <div className="flex items-center justify-center w-full bg-gray-950">
            <HopLogo className="h-6 lg:h-10 fill-white" />
          </div>
          <RedDustDraught />
          <div className="flex items-center justify-center w-full bg-gray-950">
            <HopLogo className="h-6 lg:h-10 fill-white" />
          </div>
          <DoublePlugger />
        </div>
      </div>
    </>
  );
}
