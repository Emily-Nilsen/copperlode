import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { OurBeersSection } from '@/components/OurBeersSection';
import { FoodMenuSection } from '@/components/FoodMenuSection';
import { AboutUsSection } from '@/components/AboutUsSection';
import { SpacerBarley } from '@/components/SpacerBarley';
import { SpacerWater } from '@/components/SpacerWater';
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
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
