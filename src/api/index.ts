import { getCookie } from '@/helpers';
import axios from 'axios';

const urlApi = process.env.NEXT_PUBLIC_BASE_URL_API;
const Api = axios.create({
  baseURL: urlApi,
});

Api.interceptors.request.use(async (config) => {
  const token = getCookie('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api;
