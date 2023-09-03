import client from '@pages/api/http-common';
import { CtvServicesBody, CtvServicesResponse } from '@services/ctv/typing';
import { useMutation } from 'react-query';
import { Notification } from '@constants/enum';
import toastNotification from '@utils/toast';

const useCTV = () =>
  useMutation<CtvServicesResponse, unknown, CtvServicesBody>({
    mutationKey: 'ctv',
    mutationFn: async (body: CtvServicesBody) => {
      const response = await client.post('/web/ctv', body);
      return response.data as CtvServicesResponse;
    },
    onSuccess: (res) => {
      if (res && res.httpCode === 200) {
        toastNotification('Success! SIC will contact to you soon!', Notification.success);
      } else {
        toastNotification('There are something wrong! Please try again later.', Notification.error);
      }
    },
  });

export default useCTV;
