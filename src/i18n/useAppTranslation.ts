import type { DictionaryKeyPaths } from '@/locales/types';
import { useTranslation as useBaseTranslation } from 'react-i18next';

export function useAppTranslation() {
  const { t: baseT, ...rest } = useBaseTranslation();

  const t = (key: DictionaryKeyPaths, fallback?: string) => {
    const res = baseT(key, { defaultValue: fallback });

    if (res === key) {
      console.warn(`[i18n] Missing key: ${key}`);
    }

    return res;
  };

  return { t, ...rest };
}
