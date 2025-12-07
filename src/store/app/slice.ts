import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  error: { error: Error; message: string } | Error | string | null;
  usersSearchQuery: string;
  isDarkTheme: boolean;
  isChatOpen: boolean;
}

const initialState: AppState = {
  isLoading: false,
  error: null,
  usersSearchQuery: '',
  isDarkTheme: false,
  isChatOpen: false,
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
    toggleChat: state => {
      state.isChatOpen = !state.isChatOpen;
    },
  },
});

export const { enableLoader, disableLoader, setError, unsetError, setSearchQuery, toggleChat } =
  slice.actions;
export const appReducer = slice.reducer;
