import client from '@pages/api/http-common';
import { CtvServicesBody } from '@services/ctv/typing';
import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';

const useCTV = () => {
  const mutation = useMutation({
    mutationFn: async (body: CtvServicesBody) => await client.post('/web/ctv', body),
    onSuccess: (res: AxiosResponse<any>) => {
      console.log(res);
    },
  });

  return mutation;
};

export default useCTV;
