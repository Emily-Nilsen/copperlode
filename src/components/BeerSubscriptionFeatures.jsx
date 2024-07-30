import Image from 'next/image';

const features = [
  {
    name: 'Exclusive Brews',
    description: `Access to limited edition and exclusive beers that you won't find anywhere else.`,
    imageSrc: '/images/general/beer-subscription-img-1.webp',
    imageAlt: 'Three bottles of beer on a wooden table.',
  },
  {
    name: 'Convenience',
    description: `No more trips to the store - we deliver right to your door, saving you time and hassle.`,
    imageSrc: '/images/general/beer-subscription-img-2.webp',
    imageAlt: 'Close up of person holding a beer bottle and a bottle opener.',
  },
  {
    name: 'Educational Experience',
    description: `Learn about different beer styles, brewing techniques, and more with our informative tasting notes.`,
    imageSrc: '/images/general/beer-subscription-img-3.webp',
    imageAlt: 'Close up of person holding a beer brochure.',
  },
  {
    name: 'Custom Artwork',
    description: `Each beer comes with its own custom artwork print, which you can enjoy even after the beer is long gone!`,
    imageSrc: '/images/general/beer-subscription-img-4.webp',
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
