import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';

export function FoodMenuSection() {
  return (
    <section id="meals">
      <div className="relative z-0 py-24 overflow-hidden bg-gray-900 isolate sm:py-40 sm:pb-48">
        <div className="-z-10">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Food_Menu_Section_ziqnv3.webp"
            alt=""
            fill
            className="absolute inset-0 object-cover w-full h-full -z-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gray-950/70" />
          <div className="absolute top-0 w-full lg:h-40 h-28 bg-gradient-to-b from-gray-950" />
          <div className="absolute bottom-0 w-full lg:h-40 h-28 bg-gradient-to-t from-gray-950" />
          <div className="absolute left-0 w-full h-full lg:w-1/2 bg-gradient-to-r from-gray-950/80" />
        </div>

        <div className="relative z-20 px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Delicious meals to complement your brews
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              At Copperlode Brewery Co., we believe that great beer deserves
              great food.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We<span className="font-['blanket']">’</span>ve partnered with
              well-known mobile food trucks, Smok
              <span className="font-['blanket']">‘</span>n
              <span className="font-['blanket']">’</span>Steel and East Coast
              Paella Co. On Fridays and Saturdays, enjoy American-style barbecue
              from Smok
              <span className="font-['blanket']">‘</span>n
              <span className="font-['blanket']">’</span>Steel, offering pork
              ribs, burgers, and smoked chicken wings, or savour the flavours of
              East Coast Paella Co.
              <span className="font-['blanket']">’</span>s delectable paella
              dishes.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Experience the perfect combination of outstanding food and our
              exceptional craft beers in the heart of Edmonton.
            </p>
            <div className="flex mt-10">
              <Button
                href="https://www.smoknsteel.com/menu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Smok
                <span className="font-['blanket']">‘</span>n
                <span className="font-['blanket']">’</span>Steel
                <span className="font-['blanket']">’</span>s menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
