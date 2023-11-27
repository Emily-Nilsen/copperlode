import { Morgan } from '../components/Morgan';
import { Daigo } from '../components/Daigo';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const stats = [
  {
    label: 'Pristine water from Copperlode Dam',
    value: 'Water Source',
  },
  { label: 'River Lizard Lager & Red Dust Draught', value: 'Beer Varieties' },
  { label: 'Brewmaster experience', value: '10+ Years' },
];
const values = [
  {
    name: 'Passion for Craft',
    description:
      'We love brewing exceptional craft beer and sharing our creations with the world.',
  },
  {
    name: 'Embrace Nature',
    description:
      'We respect and cherish our pristine water source and seek to maintain the beauty of the region.',
  },
  {
    name: 'Quality Craftsmanship',
    description:
      'Our beers are carefully crafted with locally-sourced ingredients, ensuring an outstanding taste.',
  },
  {
    name: 'Community Connection',
    description:
      'We value our patrons and aim to create a welcoming space for beer enthusiasts to connect.',
  },
  {
    name: 'Innovation and Creativity',
    description:
      'Our dedication to brewing unique and diverse beers drives our continuous pursuit of excellence.',
  },
  {
    name: 'Tropical Alehouse',
    description:
      'We prioritize local craftsmanship for an authentic and unique brewery and tavern experience in Far North Queensland.',
  },
];

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Brewing Excellence</title>
        <meta
          name="description"
          content="Learn about Copperlode Brewery Co., crafting exceptional beers with passion and pure water from FNQ."
        />
        <link
          rel="canonical"
          href="https://copperlodebrewing.com.au/about-us"
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
            <div className="overflow-hidden">
              <div className="px-6 pb-32 mx-auto max-w-7xl pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold text-white sm:text-6xl">
                      Crafting Excellence
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
                      Experience the perfect combination of craft beer and pure
                      water at Copperlode Brewery Co. in the heart of Cairns. We
                      take pride in creating exceptional beers using only the
                      finest locally-sourced ingredients and pristine water from
                      Copperlode Dam. Join us on our journey as we bring the
                      authentic taste of Far North Queensland straight to your
                      glass.
                    </p>
                  </div>
                  <div className="flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <Image
                          unoptimized
                          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/posts/fb_1_udg7un.webp"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          width={1500}
                          height={2034}
                        />
                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <Image
                          unoptimized
                          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/about_us_hero_5_hfo2vd.webp"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          width={1500}
                          height={2034}
                        />
                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          unoptimized
                          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/inspecting_beer_mcayhx.webp"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          width={1500}
                          height={2034}
                        />
                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="flex-none pt-32 space-y-8 w-44 sm:pt-0">
                      <div className="relative">
                        <Image
                          unoptimized
                          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/about_us_hero_4_dgcf8i.webp"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          width={1500}
                          height={2034}
                        />
                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          unoptimized
                          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/posts/fb_2_la8cp7.webp"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          width={1500}
                          height={2034}
                        />
                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="px-6 mx-auto -mt-12 max-w-7xl sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Our mission
              </h2>
              <div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-gray-300">
                    At Copperlode Brewery Co., our mission is to craft the
                    finest beers that embody the spirit of Far North Queensland.
                  </p>
                  <div className="max-w-xl mt-10 text-base leading-7 text-gray-400">
                    <p>
                      We strive to create unique, smashable brews inspired by
                      our pristine water source and the tropical beauty of the
                      region. With relentless dedication, we aim to share our
                      passion for craft beer, enriching the lives of beer
                      enthusiasts near and far.
                    </p>
                  </div>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col-reverse gap-y-4"
                      >
                        <dt className="text-base leading-7 text-gray-300">
                          {stat.label}
                        </dt>
                        <dd className="text-5xl font-semibold text-white">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/posts/panoramic_view_dn4vsm.webp"
              alt=""
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
              unoptimized
              width={3000}
              height={1500}
            />
          </div>

          {/* Values section */}
          <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Our values
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Brewed with heart and soul.
              </p>
            </div>
            <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 text-base leading-7 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name}>
                  <dt className="font-semibold text-white">{value.name}</dt>
                  <dd className="mt-1 text-gray-300">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Team section */}
          <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-48 lg:px-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Say hello to our passionate team, who meticulously brew
                exceptional beers with care and dedication, showcasing the
                unique flavours of Far North Queensland.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <Morgan />
              {/* <Daigo /> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
