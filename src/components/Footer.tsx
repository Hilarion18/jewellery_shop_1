// src/components/Footer.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold mb-4">
            <span className="text-indigo-400">Hysteria</span>
            <span className="text-white">Music</span>
          </Link>
          <p className="text-gray-400 text-sm">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Column 2: Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
          <p className="text-gray-300 mb-2">Jakarta, Indonesia</p>
          <p className="text-gray-300 mb-2">PT. Hysteria Music Collective</p>
          <p className="text-gray-300">+62 123 4567 890</p>
        </div>

        {/* Column 3: About Links */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {t('aboutUs')}
              </Link>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {t('footer.collection')}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {t('footer.blog')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Hysteria Music. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;