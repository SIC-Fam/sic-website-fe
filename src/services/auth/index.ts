import client from '@pages/api/http-common';
import { LoginBody, RegisterBody } from './type';

export const logout = () => {
  localStorage.removeItem('accessToken');
  // not working
  // history.push('/auth/login');
};

export const loginService = async (body: LoginBody) => {
  const { data } = await client.post('/auth/login', body);
  return data;
};

export const registerService = async (body: RegisterBody) => {
  const { data } = await client.post('/auth/register', body);
  return data;
};
