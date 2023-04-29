import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Header } from '@/components/Header';
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
import { Footer } from '@/components/Footer';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  return (
    <div className="bg-white">
      <Header />

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
      </main>
      <Footer />
    </div>
  );
}
