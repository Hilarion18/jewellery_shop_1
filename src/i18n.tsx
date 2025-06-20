// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {en} from './i18n/en';
import {id} from './i18n/id';

// Translations
const resources = {
  en: en,
  id: id
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;