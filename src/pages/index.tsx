import Image from 'next/image';
import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { OurBeersSection } from '@/components/OurBeersSection';
import { FoodMenuSection } from '@/components/FoodMenuSection';
import { AboutUsSection } from '@/components/AboutUsSection';
import { SpacerBarley } from '@/components/SpacerBarley';
import { ToursSection } from '@/components/ToursSection';
import { SpacerWater } from '@/components/SpacerWater';
import { SpacerHop } from '@/components/SpacerHop';
import { VisitUsSection } from '@/components/VisitUsSection';
import { BlogSection } from '@/components/BlogSection';
import { AgeVerification } from '@/components/AgeVerification';
import { UpcomingEvents } from '@/components/UpcomingEvents';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Copperlode Brewery Co. | Craft Beer in the Tropics</title>
        <meta
          name="description"
          content="Discover Copperlode Brewery Co., where craft beer and pure water meet. Explore our unique brews and experience beer bliss."
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
          <UpcomingEvents />
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
