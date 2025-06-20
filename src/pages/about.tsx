// src/pages/AboutUs.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('aboutUs')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/founder.jpg" // Replace with your image path
              alt="Rahidra, Founder of Hysteria Music"
              className="rounded-lg shadow-xl w-full h-auto max-w-md mx-auto"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {t('about.founderTitle')}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('about.founderBio1')}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('about.founderBio2')}
            </p>
            
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 dark:text-gray-300">
              &quot;{t('about.quote')}&quot;
            </blockquote>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('about.mission')}
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
            {t('about.collectionTitle')}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {item === 1 ? '10,000+' : item === 2 ? '500+' : item === 3 ? '100+' : '50+'}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {item === 1 
                    ? t('about.vinylRecords') 
                    : item === 2 
                    ? t('about.cassettes') 
                    : item === 3 
                    ? t('about.cds') 
                    : t('about.rareItems')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;