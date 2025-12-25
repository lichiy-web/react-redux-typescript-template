import { authSlice } from '@/store/auth/slice';

export const authFeature = {
  name: Feature.auth,
  reducer: authSlice.reducer,
  actions: authSlice.actions,
  selectors: authSelectors,
};

import * as authSelectors from '@/store/auth/selectors';
import { Feature } from '@/store/types';
export { authSelectors };
