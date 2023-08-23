import client from '@pages/api/http-common';

export const getListUser = async () => {
  const { data } = await client.get('/users', { params: { pageIndex: 1, pageSize: 10 } });
  return data;
};
