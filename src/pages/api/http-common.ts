import axios from 'axios';

const accessToken = JSON.parse(localStorage.getItem('accessToken') || '');
const client = axios.create({
  baseURL: process.env.BASEURL || 'http://localhost:8188/api/v1',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  timeout: 10000,
});

client.interceptors.request.use(
  async (config) => {
    if (accessToken) {
      if (config) {
        config.headers.Authorization = accessToken;
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

client.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default client;
