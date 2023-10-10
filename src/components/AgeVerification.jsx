import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { BeerMugIcon } from './Logos';
import { Button } from './Button';

export function AgeVerification() {
  const [open, setOpen] = useState(false); // Start with the modal closed

  useEffect(() => {
    // Check sessionStorage to see if the modal has already been closed
    const hasClosedModal = sessionStorage.getItem('hasClosedModal');

    if (!hasClosedModal) {
      const timer = setTimeout(() => {
        setOpen(true); // Open the modal after 7 seconds
      }, 7000); // 7000 milliseconds = 7 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    // When closing the modal, set a flag in sessionStorage
    sessionStorage.setItem('hasClosedModal', 'true');
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-800 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded-lg shadow-xl bg-gray-950 sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                {/* <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div> */}
                <div className="sm:flex sm:items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-copper/20 sm:mx-0 sm:h-10 sm:w-10">
                    <BeerMugIcon
                      className="w-6 h-6 fill-copper"
                      aria-hidden="true"
                    />
                    {/* <ExclamationTriangleIcon
                      className="w-6 h-6 text-red-600"
                      aria-hidden="true"
                    /> */}
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-white"
                    >
                      Age Verification Required
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-300">
                        Are you 18 years or older? Please confirm to access our
                        website and explore our craft beer selection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white transition-all duration-150 ease-in-out rounded-md shadow-sm outline-none bg-copper hover:contrast-125 sm:ml-3 sm:w-auto focus:outline-none"
                    onClick={handleClose}
                  >
                    Confirm Age
                  </button>
                  <a
                    href="https://www.google.com/"
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 transition-all duration-150 ease-in-out bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Exit
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
