import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';

export function FoodMenuSection() {
  return (
    <div className="relative z-0 py-24 overflow-hidden bg-gray-900 isolate sm:py-40 sm:pb-48">
      <div className="-z-10">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Food_Menu_Section_ziqnv3.webp"
          alt=""
          fill
          className="absolute inset-0 object-cover w-full h-full -z-10"
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
            At Copperlode Brewery Co., we believe that great beer deserves great
            food. That's why we offer a delicious menu of locally-sourced dishes
            to pair perfectly with our craft beers.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From juicy burgers to fresh salads, our menu has something for
            everyone. Join us for a meal and experience the perfect combination
            of great food and great beer in the heart of the rainforest.
          </p>
          <div className="flex mt-10">
            <Button href="/our-beers">View our menu</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
