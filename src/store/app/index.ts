import { appSlice } from '@/store/app/slice';

export const appFeature = {
  name: Feature.app,
  reducer: appSlice.reducer,
  actions: appSlice.actions,
  selectors: appSelectors,
};
export const appActions = appSlice.actions;

import * as appSelectors from '@/store/app/selectors';
import { Feature } from '@/store/types';
export { appSelectors };
