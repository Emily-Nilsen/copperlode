import Image from 'next/image';

const features = [
  {
    name: 'Exclusive Brews',
    description: `Access to limited edition and exclusive beers that you won't find anywhere else.`,
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Our_Beers_Section_01_x8hras.webp',
    imageAlt: 'Three bottles of beer on a wooden table.',
  },
  {
    name: 'Convenience',
    description: `No more trips to the store - we deliver right to your door, saving you time and hassle.`,
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/home_delivery_atho57.webp',
    imageAlt: 'Close up of person holding a beer bottle and a bottle opener.',
  },
  {
    name: 'Educational Experience',
    description: `Learn about different beer styles, brewing techniques, and more with our informative tasting notes.`,
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/brewing_techniques_hely2w.webp',
    imageAlt: 'Close up of person holding a beer brochure.',
  },
  {
    name: 'Custom Artwork',
    description: `Each beer comes with its own custom artwork print, which you can enjoy even after the beer is long gone!`,
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/placeholder_jzdida.webp',
    imageAlt:
      'Close up of person holding a beer bottle and a bottle opener with a custom artwork print.',
  },
];

export function BeerSubscriptionFeatures() {
  return (
    <div className="bg-transparent">
      <div className="max-w-2xl px-4 pt-24 mx-auto sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white">What you’ll get</h1>
          <p className="mt-4 text-gray-300 max-w-prose">
            Enjoy exclusive brews, convenient delivery, educational content on
            beer, and unique artwork, enhancing your drinking experience beyond
            just taste.
          </p>
        </div>

        {/* <div className="grid items-start grid-cols-1 mt-11 gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-sm font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {feature.description}
                </p>
              </div>
              <div className="overflow-hidden bg-gray-900 rounded-lg aspect-h-1 aspect-w-1">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="object-cover object-center"
                  width={2000}
                  height={1357}
                />
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
