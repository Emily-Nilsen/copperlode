import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {
  BuildingStorefrontIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Reach Out Today</title>
        <meta
          name="description"
          content="Get in touch with Copperlode Brewery Co. We’d love to hear from you. Cheers!"
        />
        <link
          rel="canonical"
          href="https://www.copperlodebrewing.com.au/contact-us"
          key="canonical"
        />
      </Head>
      <div className="relative z-0 bg-gray-950 isolate">
        <div className="sm:hidden">
          <Image
            src="/images/general/hero_mobile.webp"
            alt="Copperlod Brewery Co., Far North Queensland, Australia"
            width={1500}
            height={945}
            priority
            placeholder="blur"
            blurDataURL="/images/ImageBlurData/heroMobile_blurDataURL"
            className="absolute inset-0 object-cover w-full h-full -z-10"
          />
        </div>
        <div className="z-0 hidden sm:block">
          <Image
            src="/images/general/hero_placeholder.webp"
            priority
            placeholder="blur"
            blurDataURL="/images/ImageBlurData/heroDesktop_blurDataURL"
            alt="Copperlod Brewery Co., Far North Queensland, Australia"
            fill
            className="absolute inset-0 object-cover w-full h-full -z-10"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gray-950/80" />
        <div className="absolute bottom-0 z-0 w-full lg:h-40 h-28 bg-gradient-to-t from-gray-950" />
        <div className="grid grid-cols-1 pt-20 mx-auto max-w-7xl lg:grid-cols-2">
          <div className="relative z-20 px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 w-full overflow-hidden ring-1 ring-white/5"></div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Have questions or feedback? We
                <span className="font-['blanket']">’</span>d love to hear from
                you. Contact us for any inquiries or to share your thoughts.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingStorefrontIcon
                      className="w-6 text-copper h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    1B Hargreaves St
                    <br />
                    Edmonton, QLD 4869
                  </dd>
                </div>
                <div className="relative flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="w-6 text-copper h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a className="hover:text-white" href="tel:+61 7 4019 7861">
                      +61 7 4019 7861
                    </a>
                  </dd>
                </div>
                <div className="relative flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="w-6 text-copper h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-white"
                      href="mailto:gm@copperlodebrewing.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      gm
                      <span className="font-['blanket']">@</span>
                      copperlodebrewing.com.au
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">or</span>
                    <EnvelopeIcon
                      className="w-6 text-transparent h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  {/* <dd>
                    <div
                      className="hover:text-white"
                      href="mailto:accounts@copperlodebrewing.com.au"
                    >
                      or
                    </div>
                  </dd> */}
                </div>
                {/* <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="w-6 text-copper h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-white"
                      href="mailto:accounts@copperlodebrewing.com.au"
                    >
                      accounts
                      <span className="font-['blanket']">@</span>
                      copperlodebrewing.com.au
                    </a>
                  </dd>
                </div> */}
              </dl>
            </div>
          </div>
          <form
            action="#"
            name="Copperlode Brewing Co. - Contact Us"
            subject="Contact Copperlode Brewing Co."
            data-netlify="true"
            method="POST"
            className="z-20 px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
          >
            <input
              type="hidden"
              name="form-name"
              value="Copperlode Brewing Co. - Contact Us"
            />
            <input
              type="hidden"
              name="subject"
              value="Contact Copperlode Brewing Co."
            />
            <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      required
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      required
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:bg-t focus:text-white focus:ring-copper sm:text-sm sm:leading-6 bg-t"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={4}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="rounded-md bg-copper px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:contrast-125 transition-all duration-150 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper outline-none focus:outline-none"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
