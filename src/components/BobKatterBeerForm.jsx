export function BobKatterBeerForm() {
  return (
    <div id="the-patriot" className="relative py-16 bg-black sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative px-6 py-24 overflow-hidden bg-[#020923] shadow-2xl isolate sm:rounded-3xl sm:px-24 xl:py-32 ring-1 ring-[#141c42]">
          <div className="lg:absolute lg:inset-0 lg:left-1/2">
            <a href="#the-patriot">
              <img
                src="/images/general/BobKatterPatriotBeer.webp"
                alt="The Patriot"
                className="object-cover w-full h-64 sm:h-80 lg:h-full"
              />
            </a>
          </div>
          {/* Form container */}
          <div className="pt-16 pb-24 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
            <div className="px-6 lg:px-8">
              <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
                <h2 className="text-4xl font-semibold tracking-tight text-white text-pretty sm:text-5xl">
                  The Patriot
                </h2>
                <p className="mt-2 text-gray-300 text-lg/8">
                  No hype. Just an honest, bold brew. Sign up now for early
                  access to our latest creation from Copperlode Brewing Co.
                </p>
                <form
                  action="#"
                  name="the-patriot-waitlist"
                  subject="The Patriot Waitlist"
                  method="POST"
                  data-netlify="true"
                  className="mt-16"
                >
                  {/* Netlify hidden field */}
                  <input
                    type="hidden"
                    name="form-name"
                    value="the-patriot-waitlist"
                  />
                  {/* Honeypot for spam prevention */}
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* First Name */}
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold text-white"
                      >
                        First Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          required
                          className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-copper"
                        />
                      </div>
                    </div>
                    {/* Last Name */}
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold text-white"
                      >
                        Last Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          required
                          className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-copper"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-white"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-copper"
                        />
                      </div>
                    </div>
                    {/* Postcode Field */}
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="postcode"
                        className="block text-sm font-semibold text-white"
                      >
                        Postcode
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="postcode"
                          name="postcode"
                          type="text"
                          autoComplete="postal-code"
                          required
                          className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-copper"
                        />
                      </div>
                    </div>
                    {/* Desired Units Fieldset */}
                    <fieldset className="sm:col-span-2">
                      <legend className="block text-sm font-semibold text-white">
                        Desired Units
                      </legend>
                      <div className="mt-4 space-y-4 text-sm text-gray-300">
                        <div className="flex gap-x-2.5">
                          <input
                            defaultValue="6-packs"
                            id="units-6-packs"
                            name="units"
                            type="radio"
                            required
                            className="relative w-4 h-4 mt-1 border border-gray-300 rounded-full appearance-none checked:border-copper checked:bg-copper focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-copper"
                          />
                          <label htmlFor="units-6-packs">6 packs</label>
                        </div>
                        <div className="flex gap-x-2.5">
                          <input
                            defaultValue="4-packs"
                            id="units-4-packs"
                            name="units"
                            type="radio"
                            required
                            className="relative w-4 h-4 mt-1 border border-gray-300 rounded-full appearance-none checked:border-copper checked:bg-copper focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-copper"
                          />
                          <label htmlFor="units-4-packs">4 packs</label>
                        </div>
                        <div className="flex gap-x-2.5">
                          <input
                            defaultValue="16-pack-cartons"
                            id="units-16-pack-cartons"
                            name="units"
                            type="radio"
                            required
                            className="relative w-4 h-4 mt-1 border border-gray-300 rounded-full appearance-none checked:border-copper checked:bg-copper focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-copper"
                          />
                          <label htmlFor="units-16-pack-cartons">
                            16 pack cartons
                          </label>
                        </div>
                        <div className="flex gap-x-2.5">
                          <input
                            defaultValue="24-pack-cartons"
                            id="units-24-pack-cartons"
                            name="units"
                            type="radio"
                            required
                            className="relative w-4 h-4 mt-1 border border-gray-300 rounded-full appearance-none checked:border-copper checked:bg-copper focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-copper"
                          />
                          <label htmlFor="units-24-pack-cartons">
                            24 pack cartons
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="flex justify-end pt-8 mt-10 border-t border-gray-900/10">
                    <button
                      type="submit"
                      className="rounded-md bg-copper px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:contrast-125 transition-all duration-150 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper outline-none focus:outline-none"
                    >
                      Join Waitlist
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
