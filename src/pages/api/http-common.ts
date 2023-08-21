import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { getToken, removeToken } from './token';

const accessToken = '';

const client = axios.create({
  baseURL: 'http://localhost:8089/api/v',
  // withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  timeout: 10000,
});

export const HttpCommon = ({ children }: any) => {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  const middlewareRequest = async (config: any) => {
    try {
      let temp = {
        ...config,
        headers: {
          ...config?.headers,
          'Accept-Language': 'vi',
        },
      };
      if (config?.disableToken) {
        return temp;
      }
      const tokenAccess: any = JSON.parse(getToken() ?? '{}');

      if (tokenAccess?.accessToken) {
        return {
          ...temp,
          headers: {
            ...temp.headers,
            Authorization: `Bearer ${tokenAccess?.accessToken}`,
          },
        };
      }
      return {
        ...temp,
        headers: {
          ...temp.headers,
        },
      };
    } catch (err) {
      localStorage.clear();
      sessionStorage.clear();
      removeToken();
      pathname !== '/auth/login' && window.location.replace('/auth/login');
    }
  };

  const middlewareResponse = (response: any) => {
    try {
      console.log(response?.data);
      const { errorCode, httpCode, responseCode, description, errorMessage } = response?.data; // eslint-disable-line
      if (!!errorCode || (!!httpCode && httpCode !== 200)) {
        toast.error(description || responseCode || errorMessage);
      }
      return response;
    } catch (err) {
      localStorage.clear();
      removeToken();
      sessionStorage.clear();
      pathname !== '/auth/login' && window.location.replace('/auth/login');
    }
  };

  let isRefreshing = false;
  let subscribers: any = [];

  const middlewareResponseError = async (error: any) => {
    const { config } = error;
    const originalRequest = config;

    if (error?.response) {
      const { status } = error.response;
      if (status === 401) {
        if (!isRefreshing) {
          isRefreshing = true;
          // const access_token: any = getToken()
          // const refresh_token = access_token?.refresh_token
          // Send a request to refresh the access token
          // const api = ''
          // const requestBody = {
          //   grant_type: 'refresh_token',
          //   refresh_token,
          // }

          // try {
          //   try {
          //     const res = await axios.post(api, requestBody)
          //     setToken(res?.data?.data)
          //     const { access_token: access_token_1 } = res?.data?.data
          //     originalRequest.headers.Authorization = `Bearer ${access_token_1}`
          //     subscribers.forEach((callback: any) => callback(access_token_1))
          //     subscribers = []
          //     return await axios(originalRequest)
          //   } catch (error_2) {
          //     localStorage.clear()
          //     sessionStorage.clear()
          //     pathname !== '/auth/login' && window.location.replace('/auth/login')
          //     removeToken()
          //     return await Promise.reject(error_2)
          //   }
          // } finally {
          //   isRefreshing = false
          // }
        } else {
          return new Promise((resolve) => {
            subscribers.push((access_token: any) => {
              originalRequest.headers.Authorization = `Bearer ${access_token}`;
              resolve(axios(originalRequest));
            });
          });
        }
      }
    }

    toast.error(error.message);
    return Promise.reject(error.message);
  };

  client.interceptors.request.use(middlewareRequest, (error: any) => Promise.reject(error));

  client.interceptors.response.use(middlewareResponse, middlewareResponseError);
  return children;
};

export default client;
