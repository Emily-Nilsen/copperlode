import { Button } from '@/components/Button';
import Image from 'next/image';

export function OurBeersSection() {
  return (
    <div className="py-32 overflow-hidden bg-gray-950">
      <div className="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Our craft beers
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              At Copperlode Brewery Co., we are passionate about crafting unique
              and delicious beer that showcases the flavours of the rainforest.
              We use crystal clear, pure water from Copperlode Dam and the
              finest ingredients to produce our beers.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Each beer is handcrafted with care and attention to detail, from
              crisp lagers to rich stouts. Explore our collection and discover
              the perfect brew to suit your taste.
            </p>
            <div className="flex mt-10">
              <Button href="/our-beers">Find your favourite brew</Button>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/red_beer_v1_so8nyw.webp"
                alt=""
                width={1500}
                height={1000}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="flex self-end justify-end flex-none order-first w-64 lg:w-auto">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/red_beer_ud8mew.webp"
                  alt=""
                  width={1500}
                  height={1134}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/golden_beer_v1_kz7kmi.webp"
                  alt=""
                  width={1500}
                  height={844}
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Our_Beers_Section_03_yeswgt.webp"
                  alt=""
                  width={1500}
                  height={1000}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
