import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { stateApi } from '@/store/stateApi';
import { handleAsyncThunkMiddleware } from './middlewares/appLoadingMiddlware';
import { Feature, type AppState } from '@/store/types';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['isDarkTheme'],
};

export const store = configureStore({
  reducer: {
    [Feature.app]: persistReducer<AppState>(persistConfig, stateApi[Feature.app].reducer),
    [Feature.auth]: stateApi[Feature.auth].reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(handleAsyncThunkMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
