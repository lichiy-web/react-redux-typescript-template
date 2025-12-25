import { appFeature } from '@/store/app';
import { authFeature } from '@/store/auth';
import { Feature } from '@/store/types';

export const stateApi = {
  [Feature.app]: appFeature,
  [Feature.auth]: authFeature,
};

