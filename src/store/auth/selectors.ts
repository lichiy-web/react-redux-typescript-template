import type { RootState } from '../store';

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectError = (state: RootState) => state.auth.error;
export const selectUsersSearchQuery = (state: RootState) => state.auth.usersSearchQuery;
