import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';

const HotelsMenuOvolo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const router = useRouter();
  
  // Check if current path matches menu item
  const isActive = (path: string) => {
    return router.pathname === path;
  };
  
  return (
    <Menu as="div" 
      className="
        relative inline-block text-left 
        border-transparent
        hover:underline hover:text-underline-offset-4 hover:text-decoration-thickness-2 hover:border-ovolo-green
        "> 
      <div 
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <MenuButton
          className={`
          hover:text-ovolo-green inline-flex w-full gap-x-1.5 rounded-md 
            px-3 py-3 text-sm font-semibold text-white dark:text-gray-900 shadow-xs
            ${
              isActive('/about')
                ? 'border-indigo-500 text-gray-500 font-bold text-xl dark:text-white'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
              }
            `}>
          {t('menu.hotels').toUpperCase()}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
        
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
            <div className="text-white absolute left-0 top-full mt-2 w-[90vw] max-w-6xl bg-black p-8 shadow-lg z-50">
          {/* <div className="absolute left-0 z-10 mt-2  origin-top-right bg-black text-white p-8 space-y-12"> */}
            {/* Ovolo Hotels Section */}
            <section>
              <h2 className="text-2xl font-bold">Ovolo Hotels</h2>
              <p className="mt-2 max-w-2xl">
                Welcome to an experience full of wonder. A collection of boutique hotels that keep you connected to the little luxuries you love. <br />
                All effortlessly included. Wonder. Full.
              </p>
              <div className="mt-6 grid md:grid-cols-5 sm:grid-cols-2 gap-y-6 gap-x-6">
                <div>
                  <h3 className="font-semibold text-gray-400 uppercase">Hong Kong</h3>
                  <p className="font-bold">Ovolo Central</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-400 uppercase">Sydney, Australia</h3>
                  <p className="font-bold">Ovolo Woolloomooloo</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-400 uppercase">Brisbane, Australia</h3>
                  <p className="font-bold">Ovolo The Valley</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-400 uppercase">Melbourne, Australia</h3>
                  <p className="font-bold">Ovolo South Yarra</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-400 uppercase">Canberra, Australia</h3>
                  <p className="font-bold">Ovolo Nishi</p>
                </div>
              </div>
            </section>

            <hr className="border-gray-700" />

            {/* Collective Hotels Section */}
            <section>
              <h2 className="text-2xl font-bold">By Ovolo Collective Hotels</h2>
              <p className="mt-2 max-w-2xl">
                Each one unique, each one special. The more you explore, the more you’ll find. Which is why people come for the experience, and stay for the memories. Wonder. Full.
              </p>
              <div className="mt-6 grid md:grid-cols-5 sm:grid-cols-2 gap-y-6 gap-x-6">
                <div>
                  <h3 className="font-semibold text-gray-400 uppercase">Hong Kong</h3>
                  <p className="font-bold">Southside by Ovolo</p>
                  <p className="font-bold mt-1">The Aberdeen by Dash</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-400 uppercase">Melbourne, Australia</h3>
                  <p className="font-bold">Laneways by Ovolo</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-400 uppercase">Canberra, Australia</h3>
                  <p className="font-bold">Nishi Apartments by Ovolo</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-400 uppercase">Bali, Indonesia</h3>
                  <p className="font-bold">Mamaka by Ovolo</p>
                </div>
              </div>
            </section>
          </div>
          {/* <MenuItems static className="absolute left-0 mt-2 w-48 bg-black shadow-lg focus:outline-none">
            <div className="py-1">
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-gray-800`}
                  >
                    Item 1
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-gray-800`}
                  >
                    Item 2
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-gray-800`}
                  >
                    Item 3
                  </a>
                )}
              </MenuItem>
            </div>
          </MenuItems> */}
        </Transition>
      </div>
    </Menu>
  );
};

export default HotelsMenuOvolo;