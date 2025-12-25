export { store, persistor } from '@/store/store';

import { appFeature } from '@/store/app';
import { authFeature } from '@/store/auth';
import { Feature } from '@/store/types';

const stateApi = {
  [Feature.app]: appFeature,
  [Feature.auth]: authFeature,
};

export default stateApi;
