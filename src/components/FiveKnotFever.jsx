import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { label: 'ABV', value: '4.5%' },
  // { label: 'Employees', value: '37' },
  // { label: 'Countries', value: '12' },
  // { label: 'Raised', value: '$25M' },
];

export function FiveKnotFever() {
  return (
    <div className="py-24 bg-gray-950 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative px-6 pt-64 overflow-hidden bg-gray-900 shadow-2xl rounded-3xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 lg:aspect-[1/1]">
              <Image
                className="absolute inset-0 object-cover w-full h-full lg:aspect-[1/1]"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/5_knot_fever_jengjo.webp"
                alt="Five Knot Fever"
                width={3000}
                height={1681}
                unoptimized
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-300 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-copper">
                Relaxing - Pale Ale - Escapist
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Five Knot Fever
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  When it<span className="font-['blanket']">’</span>s five knots
                  out on the reef, no one can blame you for pulling a sickie
                  <span className="font-['blanket']">,</span> and nothing pairs
                  better with a cheeky fishing trip than our 4.5% pale ale.
                </p>

                <p className="mt-8">
                  We craft it with a bouquet of tropical hops and Australian
                  malt<span className="font-['blanket']">,</span> and this beer
                  tastes better than a day in the office.
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-gray-100/10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex mt-10">
              <Link
                href="/about-us"
                className="text-base font-semibold leading-7 transition duration-300 ease-in-out text-copper hover:text-copper/90"
              >
                Learn more about Copperlode Brewery Co.{' '}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
