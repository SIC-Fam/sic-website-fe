export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const setToken = (val: any) => {
  localStorage.setItem('accessToken', JSON.stringify(val));
};

export const removeToken = () => {
  localStorage.removeItem('accessToken');
};
