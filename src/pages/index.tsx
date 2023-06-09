import Image from 'next/image';

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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  return (
    <div className="bg-copper">
      <main>
        <Hero />
        <OurBeersSection />
        <SpacerBarley />
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
  );
}
