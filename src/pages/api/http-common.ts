import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const accessToken = '';

const client = axios.create({
  baseURL: publicRuntimeConfig.BASE_API || 'http://localhost:8188/api/v1',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  timeout: 10000,
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
