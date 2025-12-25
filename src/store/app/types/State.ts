import type { Locale } from '@/locales/types';

export interface AppState {
  isLoading: boolean;
  error: { error: Error; message: string } | Error | string | null;
  usersSearchQuery: string;
  locale: Locale | null;
  isDarkTheme: boolean;
}
