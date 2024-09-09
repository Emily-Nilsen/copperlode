import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

// Import static components
import { Hero } from '@/components/Hero';
import { SpacerBarley } from '@/components/SpacerBarley';
import { UpcomingEvents } from '@/components/UpcomingEvents';
import { SpacerHop } from '@/components/SpacerHop';
import { SpacerWater } from '@/components/SpacerWater';
import { AgeVerification } from '@/components/AgeVerification';
import {ChristmasParty } from '@/components/ChristmasParty';

// Import other components dynamically
const OurBeersSection = dynamic(() =>
  import('@/components/OurBeersSection').then((mod) => mod.OurBeersSection)
);
const FoodMenuSection = dynamic(() =>
  import('@/components/FoodMenuSection').then((mod) => mod.FoodMenuSection)
);
const AboutUsSection = dynamic(() =>
  import('@/components/AboutUsSection').then((mod) => mod.AboutUsSection)
);
const ToursSection = dynamic(() =>
  import('@/components/ToursSection').then((mod) => mod.ToursSection)
);
const VisitUsSection = dynamic(() =>
  import('@/components/VisitUsSection').then((mod) => mod.VisitUsSection)
);
const BlogSection = dynamic(() =>
  import('@/components/BlogSection').then((mod) => mod.BlogSection)
);

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Copperlode Brewery Co. | Craft Brewery in Cairns</title>
        <meta
          name="description"
          content="Discover Copperlode Brewery Co., the ultimate craft brewery in Cairns, where exceptional brews and pure water come together for an unmatched beer experience."
        />
        <link
          rel="canonical"
          href="https://copperlodebrewing.com.au/"
          key="canonical"
        />
      </Head>
      <div className="bg-copper">
        <main>
          <Hero />
          <OurBeersSection />
          <SpacerBarley />
          <ChristmasParty />
          {/* <UpcomingEvents /> */}
          <SpacerHop />
          <FoodMenuSection />
          <SpacerWater />
          <AboutUsSection />
          <SpacerHop />
          <ToursSection />
          <SpacerBarley />
          <VisitUsSection />
          <SpacerWater />
          <BlogSection />
          <AgeVerification />
        </main>
      </div>
    </>
  );
}
