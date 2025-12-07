import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import i18n from '@/i18n/i18n';
// import { selectLocale } from '@/store/selectors';

export function AppLanguageSync() {
  //   const locale = useSelector(selectLocale);
  const locale = null;
  //   console.log({ curLang: i18n.language });
  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return null;
}
