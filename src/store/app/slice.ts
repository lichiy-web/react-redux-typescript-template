import type { AppState } from '@/store/app/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: AppState = {
  isLoading: false,
  error: null,
  usersSearchQuery: '',
  locale: null,
  isDarkTheme: false,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enableLoader: state => {
      state.isLoading = true;
    },
    disableLoader: state => {
      state.isLoading = false;
    },
    setError: (state, { payload: error }: PayloadAction<AppState['error']>) => {
      state.error = error instanceof Error ? error.message : error;
    },
    unsetError: state => {
      state.error = null;
    },
    setSearchQuery: (
      state,
      { payload: newSearchQuery }: PayloadAction<AppState['usersSearchQuery']>
    ) => {
      state.usersSearchQuery = newSearchQuery;
    },
    setLocale: (state, { payload: locale }: PayloadAction<AppState['locale']>) => {
      state.locale = locale;
    },
  },
});

export const appActions = slice.actions;
export const appReducer = slice.reducer;
