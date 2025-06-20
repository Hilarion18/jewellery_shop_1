import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
import GB from 'country-flag-icons/react/3x2/GB';
import ID from 'country-flag-icons/react/3x2/ID';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HotelsMenuOvolo from './HotelsMenuOvolo';
import Image from 'next/image';

const NavbarOvolo: React.FC = () => {
  const { t, i18n } = useTranslation();
  // const location = useLocation();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  // const [darkMode, setDarkMode] = useState(() => {
  //   // Check localStorage or system preference
  //   return localStorage.getItem('darkMode') === 'true' || 
  //          (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  // });
  const [darkMode, setDarkMode] = useState(false); // default value

  // Check dark mode preference on client only
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(stored === 'true' || (!stored && prefersDark));
  }, []);

  // Apply dark class when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsLangMenuOpen(false);
  };

  // Check if current path matches menu item
  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <nav className="fixed w-full dark:bg-white bg-black shadow-lg h-16 z-10">
      <div className="max-w-full items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center pl-4">
              <Link href={'/'}>
                <img className='w-40' src={"https://ovolohotels.com/wp-content/themes/wonderful/assets/img/group_logo.svg"} alt="" />
              </Link>
            </div>

            {/* <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className='p-3 hover:border-ovolo-green'> */}
            <div className="hidden sm:flex items-center px-8 py-4">
              <HotelsMenuOvolo/>
              <Link href={"/whatson"}
                className={`
                hover:text-ovolo-green inline-flex w-full gap-x-1.5 rounded-md 
                  px-3 py-3 text-sm font-semibold text-white dark:text-gray-900 shadow-xs
                  ${
                    isActive('/about')
                      ? 'border-indigo-500 text-gray-500 font-bold text-xl dark:text-white'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
                    }
                  `}>
                {t('page.whatson').toUpperCase()}
              </Link>
            </div>
          </div>
          
          {/* Right side controls */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>

            {/* Language selector */}
            <div className="ml-3 relative">
              <button
                type="button"
                className="bg-white dark:bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <span className="sr-only">Open language menu</span>
                {i18n.language === 'en' ? (
                  <GB className="h-6 w-6" />
                ) : (
                  <ID className="h-6 w-6" />
                )}
              </button>

              {isLangMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center"
                  >
                    <GB className="h-4 w-4 mr-2" />
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('id')}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left flex items-center"
                  >
                    <ID className="h-4 w-4 mr-2" />
                    Bahasa Indonesia
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black">
          <div className="pt-2 pb-3 space-y-1">
            <Link href={"/whatson"}
              className={`
              hover:text-ovolo-green inline-flex w-full gap-x-1.5 rounded-md 
                px-3 py-3 text-sm font-semibold text-white dark:text-gray-900 shadow-xs
                ${
                  isActive('/about')
                    ? 'border-indigo-500 text-gray-500 font-bold text-xl dark:text-white'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
                  }
                `}>
              {t('page.whatson').toUpperCase()}
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-4">
              <button
                onClick={toggleDarkMode}
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {darkMode ? t('lightMode') : t('darkMode')}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <button
                onClick={() => changeLanguage('en')}
                className="block w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700 flex items-center"
              >
                <GB className="h-4 w-4 mr-2" />
                English
              </button>
              <button
                onClick={() => changeLanguage('id')}
                className="block w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700 flex items-center"
              >
                <ID className="h-4 w-4 mr-2" />
                Bahasa Indonesia
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarOvolo;