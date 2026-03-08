import { Feature } from '@/store/types';
import type { RootState } from '../store';

export const selectIsLoading = (state: RootState) => state[Feature.auth].isLoading;
export const selectError = (state: RootState) => state[Feature.auth].error;
export const selectUsersSearchQuery = (state: RootState) => state[Feature.auth].usersSearchQuery;
