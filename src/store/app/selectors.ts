import { Feature } from '@/store/types';
import type { RootState } from '../store';

export const selectIsLoading = (state: RootState) => state[Feature.app].isLoading;
export const selectError = (state: RootState) => state[Feature.app].error;
export const selectUsersSearchQuery = (state: RootState) => state[Feature.app].usersSearchQuery;
export const selectLocale = (state: RootState) => state[Feature.app].locale;
