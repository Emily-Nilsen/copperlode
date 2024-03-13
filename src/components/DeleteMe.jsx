/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export function DeleteMe() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex flex-col justify-center flex-1 min-h-full py-12 sm:px-6 lg:px-8">
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="w-auto h-10 mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-center text-white">
            Join the waiting list
          </h2>
        </div> */}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="px-6 py-12 shadow bg-white/5 sm:rounded-lg sm:px-12">
            <form action="#" method="POST" className="my-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-4">
                <div className="sm:col-span-2">
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
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6 bg-white/5 ring-white/10"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
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
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6 bg-white/5"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6 bg-white/5"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="phone"
                      className="block font-semibold text-white"
                    >
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-300">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6 bg-white/5"
                    />
                  </div>
                </div>
                <div className="grid sm:col-span-4 sm:grid-col-4 grid-col-1 gap-x-8 gap-y-6 ">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6 bg-white/5"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      State
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6 bg-white/5"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6 bg-white/5"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Do you have any questions?
                    </label>
                    <p id="message-description" className="text-gray-300">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-copper sm:text-sm sm:leading-6 bg-white/5"
                      defaultValue={''}
                    />
                  </div>
                </div>
                {/* <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-semibold leading-6 text-white">
                    Preferred subscription plan
                  </legend>
                  <div className="mt-4 space-y-4 text-sm leading-6 text-gray-300">
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-under-25k"
                        name="budget"
                        defaultValue="under_25k"
                        type="radio"
                        className="w-4 h-4 mt-1 border-gray-300 shadow-sm text-copper focus:ring-copper"
                      />
                      <label htmlFor="budget-under-25k">
                        Subscription Plan 1
                      </label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-25k-50k"
                        name="budget"
                        defaultValue="25k-50k"
                        type="radio"
                        className="w-4 h-4 mt-1 border-gray-300 shadow-sm text-copper focus:ring-copper"
                      />
                      <label htmlFor="budget-25k-50k">
                        Subscription Plan 2
                      </label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-50k-100k"
                        name="budget"
                        defaultValue="50k-100k"
                        type="radio"
                        className="w-4 h-4 mt-1 border-gray-300 shadow-sm text-copper focus:ring-copper"
                      />
                      <label htmlFor="budget-50k-100k">
                        Subscription Plan 3
                      </label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-over-100k"
                        name="budget"
                        defaultValue="over_100k"
                        type="radio"
                        className="w-4 h-4 mt-1 border-gray-300 shadow-sm text-copper focus:ring-copper"
                      />
                      <label htmlFor="budget-over-100k">
                        Subscription Plan 4
                      </label>
                    </div>
                  </div>
                </fieldset> */}
              </div>
              <div className="flex justify-end pt-8 mt-10 border-none border-white/10">
                <button
                  type="submit"
                  className="rounded-md bg-copper px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-copper/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper transition-all"
                >
                  Join the waiting list
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
