import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { dictionaries } from '@/locales';

console.log('Configure i18n');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: dictionaries,
    fallbackLng: 'en',

    ns: ['common', 'errors'],
    defaultNS: 'common',

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
