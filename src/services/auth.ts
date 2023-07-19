import client from '@pages/api/http-common';
import { UserType } from '@typing/user';
import { AxiosResponse } from 'axios';
import toastNotification from '@utils/toast';
import { GenderType, Notification } from '@constants/enum';

interface LoginBody {
  username: string;
  password: string;
}

interface RegisterBody {
  fullname: string;
  usernane: string;
  password: string;
  email: string;
  gender: GenderType;
}

export const logout = () => {
  localStorage.removeItem('accessToken');
  // not working
  // history.push('/auth/login');
};

export const login = async ({ username, password }) => {
  try {
    const response = await client.post<LoginBody, AxiosResponse<UserType>>('/auth/login', { username, password });
    localStorage.setItem('accessToken', JSON.stringify(response.data?.accessToken));
    toastNotification('Login success', Notification.success);
    // not working
    // const { from } = customHistory?.location?.state || { from: { pathname: '/' } };
    // history.push(from);
    return response;
  } catch (error: any) {
    toastNotification('Login failed', Notification.error);
  }
};

export const register = async (body) => {
  try {
    const response = await client.post<RegisterBody, any>('/auth/register', body);
    toastNotification('Register success', Notification.success);
    return response;
  } catch (error: any) {
    toastNotification('Register failed', Notification.error);
  }
};
