import type { dictionaries } from '@/locales';
import { common } from '@/locales/en/common';
import { errors } from '@/locales/en/errors';

/** Generic to create dictionary structure type from the en dictionary as const */
export type NestedDictionary<T> = {
  [K in keyof T]: T[K] extends string ? string : NestedDictionary<T[K]>;
};

export type CommonDictionary = NestedDictionary<typeof common>;
export type ErrorsDictionary = NestedDictionary<typeof errors>;

export type EnDictionary = { common: CommonDictionary; errors: ErrorsDictionary };

/** The common dictionary structure type
 * English dictionary is a standard
 */
export type LocaleDictionary = EnDictionary;
export type Locale = keyof typeof dictionaries;

/** Generic for an IDE autocomplete while typing path of dictionary key as a string,
 * @example t('common.') -> IDE autocomplete: ['buttons', 'welcome', 'userName']
 */

type NamespaceKeys<T> = {
  [K in keyof T & string]: T[K] extends object ? `${K}:${NestedKeys<T[K]>}` : never;
}[keyof T & string];

type NestedKeys<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object ? `${K}` | `${K}.${NestedKeys<T[K]>}` : `${K}`;
    }[keyof T & string]
  : never;

export type DictionaryKeyPaths = NamespaceKeys<LocaleDictionary>;
