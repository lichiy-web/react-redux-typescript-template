import { SETTINGS } from '@/config/settings';
import axios from 'axios';

const appApiConfig = {
  baseURL: import.meta.env.BASE_URL,
  timeout: SETTINGS.fetchTimeout,
};

export const appApi = axios.create(appApiConfig);
