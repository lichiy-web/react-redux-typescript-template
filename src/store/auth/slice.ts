import type { AuthState } from '@/store/auth/types';
import { Feature } from '@/store/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  isLoading: false,
  error: null,
  usersSearchQuery: '',
  locale: null,
  isDarkTheme: false,
};

export const authSlice = createSlice({
  name: Feature.auth,
  initialState,
  reducers: {
    enableLoader: state => {
      state.isLoading = true;
    },
    disableLoader: state => {
      state.isLoading = false;
    },
    setError: (state, { payload: error }: PayloadAction<AuthState['error']>) => {
      state.error = error instanceof Error ? error.message : error;
    },
    unsetError: state => {
      state.error = null;
    },
    setSearchQuery: (
      state,
      { payload: newSearchQuery }: PayloadAction<AuthState['usersSearchQuery']>
    ) => {
      state.usersSearchQuery = newSearchQuery;
    },
    setLocale: (state, { payload: locale }: PayloadAction<AuthState['locale']>) => {
      state.locale = locale;
    },
  },
});
