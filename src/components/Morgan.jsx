import Image from 'next/image';
import Link from 'next/link';

export function Morgan() {
  return (
    <div className="pt-24 mx-auto lg:mx-0 bg-gray-950 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative px-6 pt-64 overflow-hidden bg-white shadow-2xl rounded-3xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 object-cover w-full h-full"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Morgan_t4xoks.webp"
                alt="Morgan Hind"
                width={3024}
                height={4032}
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-300 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-copper">
                Co-Founder - Head Brewer - CEO
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Morgan Hind (Morgo)
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  A ginger and an all-around weapon, originally from
                  Christchurch. He found himself adrift on his trusty outrigger
                  trigger after a carton of Speights at the Hungry Bro, running
                  ashore just north of Yorkeys Knob armed only with a schooner
                  glass and his ever-ready double plug pluggers.
                </p>
                <p className="mt-8">
                  Like a beer hound, he sniffed out Blue Sky Brewery and pursued
                  his beer brewing endeavours. He then journeyed west to Western
                  Australia, leading a team and creating great beers at Gage
                  Roads Brew Co. In 2014, the east coast called, and the hipster
                  he is, moved to Murwillumbah, working for a couple of years at
                  Stone and Wood Brew Co.
                </p>
                <p className="mt-8">
                  With the tropics calling, he moved back to where it all
                  started, not-so-sunny Cairns, taking on the head brewer
                  <span className="font-['blanket']">’</span>s job at Coral Sea
                  Brewery, refining his craft and finding the love of
                  NQ-inspired smashable beers. Now, as Copperlode
                  <span className="font-['blanket']">’</span>s head brewer and
                  CEO of his show, exciting times await for the south side of
                  Cairns.
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-white/10 sm:grid-cols-4"></dl>
          </div>
        </div>
      </div>
    </div>
  );
}
