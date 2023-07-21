import axios from 'axios';
import getConfig from 'next/config';
import { toast } from 'react-toastify';
const { publicRuntimeConfig } = getConfig();

const accessToken = '';

const client = axios.create({
  baseURL: `${publicRuntimeConfig.BASE_API}/api/v` || 'http://localhost:8188/api/v1',
  // withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  timeout: 10000,
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.replace('/auth/login');
      } else {
        toast.error(error.response.data.errorMessage);
      }
    }
    return Promise.reject(error);
  },
);

export default client;
