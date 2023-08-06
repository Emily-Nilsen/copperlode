import Image from 'next/image';
import Link from 'next/link';

export function Daigo() {
  return (
    <div className="pb-24 mx-auto lg:mx-0 bg-gray-950 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative px-6 pt-64 overflow-hidden bg-white shadow-2xl rounded-3xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 ">
              <Image
                className="absolute inset-0 object-cover w-full h-full "
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Copperlode%20Brewery/Daigo_kxycpt.webp"
                alt="Daigo Kwik"
                width={3024}
                height={4032}
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-300 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-copper">
                Co-Founder - Executive Director of Sales - Bar Manager
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Daigo Kwik
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Daigo, a valued team member, brings extensive knowledge and
                  skill to Copperlode Brewery Co. With a love for craft beer and
                  a talent for sales, he contributes to the brewery's success.
                </p>
                <p className="mt-8">
                  As Executive Director of Sales and Bar Manager, he strives to
                  connect with beer enthusiasts and create a welcoming
                  atmosphere. Daigo<span className="font-['blanket']">’</span>s
                  infectious passion for craft beer drives Copperlode
                  <span className="font-['blanket']">’</span>s journey to become
                  a top destination.
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-white/10 sm:grid-cols-4"></dl>
            <div className="flex mt-10">
              <Link
                href="/"
                className="text-base font-semibold leading-7 text-copper"
              >
                Back to the beers <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
