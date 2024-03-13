import Image from 'next/image';

const incentives = [
  {
    name: 'Sign Up',
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/online_form_sfqtad.svg',
    description: 'Choose your subscription plan and sign up online.',
  },
  {
    name: 'Receive',
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/truck_lwwp60.svg',
    description:
      'Your curated selection of beers will be delivered to your doorstep.',
  },
  {
    name: 'Enjoy',
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Asset_2_bcosxc.svg',
    description:
      'Sit back, relax, and enjoy exploring the world of craft beer from the comfort of your home.',
  },
];

export function BeerSubscriptionIncentives() {
  return (
    <div className="bg-transparent">
      <div className="py-24 mx-auto max-w-7xl sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl px-4 mx-auto lg:max-w-none">
          <div className="grid items-center grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
            {/* Exclusive Brews */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Exclusive Brews
              </h2>
              <p className="mt-4 text-gray-300">
                Access to limited edition and exclusive beers that you won't
                find anywhere else.
              </p>
            </div>
            <div className="overflow-hidden bg-gray-900 rounded-lg aspect-h-2 aspect-w-3">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Our_Beers_Section_01_x8hras.webp"
                alt=""
                width={2000}
                height={1357}
                className="object-cover object-center"
              />
            </div>
            {/* Convenience */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Convenience
              </h2>
              <p className="mt-4 text-gray-300">
                No more trips to the store - we deliver right to your door,
                saving you time and hassle.
              </p>
            </div>
            <div className="overflow-hidden bg-gray-900 rounded-lg aspect-h-2 aspect-w-3">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/home_delivery_atho57.webp"
                alt=""
                width={2000}
                height={1357}
                className="object-cover object-center"
              />
            </div>
            {/* Educational Experience */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Educational Experience
              </h2>
              <p className="mt-4 text-gray-300">
                Learn about different beer styles, brewing techniques, and more
                with our informative tasting notes.
              </p>
            </div>
            <div className="overflow-hidden bg-gray-900 rounded-lg aspect-h-2 aspect-w-3">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/brewing_techniques_hely2w.webp"
                alt=""
                width={2000}
                height={1357}
                className="object-cover object-center"
              />
            </div>
            {/* Custom Artwork */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Custom Artwork
              </h2>
              <p className="mt-4 text-gray-300">
                Each beer comes with its own custom artwork print, which you can
                enjoy even after the beer is long gone!
              </p>
            </div>
            <div className="overflow-hidden bg-gray-900 rounded-lg aspect-h-2 aspect-w-3">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/placeholder_jzdida.webp"
                alt=""
                width={2000}
                height={1357}
                className="object-cover object-center"
              />
            </div>
            {/* How it works */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                How it Works
              </h2>
              <p className="mt-4 text-gray-300">
                Joining our Exclusive Beer Club is simple: Sign up for a plan,
                receive expertly curated beers at your doorstep, and dive into a
                world of unique flavours and stories from the comfort of your
                home.
              </p>
            </div>
            <div className="overflow-hidden bg-gray-900 rounded-lg aspect-h-2 aspect-w-3">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/craft_beer_yfmusz.webp"
                alt=""
                width={2000}
                height={1357}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
