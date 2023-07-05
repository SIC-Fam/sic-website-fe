import { customHistory, history } from '@helpers';
import client from '@pages/api/http-common';
import { authAtom } from '@state/auth';
import { useRecoilState } from 'recoil';
const AuthService = () => {
  const [, setAuth] = useRecoilState(authAtom);

  const login = async ({ username, password }) => {
    const response = await client.post('/auth/login', { username, password });
    localStorage.setItem('accessToken', JSON.stringify(response.data?.accessToken));
    setAuth(response.data?.accessToken);
    const { from } = customHistory?.location?.state || { from: { pathname: '/' } };
    history.push(from);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuth(null);
    history.push('/auth/login');
  };

  return {
    login,
    logout,
  };
};

export default AuthService;
