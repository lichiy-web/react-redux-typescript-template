import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import type { Middleware } from 'redux';
import type { AppState } from '@/store/app/types';
import { appActions } from '@/store/app';

const { enableLoader, disableLoader, setError } = appActions;

export const handleAsyncThunkMiddleware: Middleware = store => next => action => {
  if (isPending(action)) {
    store.dispatch(enableLoader());
  }

  if (isFulfilled(action) || isRejected(action)) {
    store.dispatch(disableLoader());
  }

  if (isRejected(action)) {
    const error = action.payload;
    if (error === 'ERR_CANCELED') return next(action);
    store.dispatch(setError(error as AppState['error']));
  }

  return next(action);
};
