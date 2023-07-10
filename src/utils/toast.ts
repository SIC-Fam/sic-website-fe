import { Notification } from '@constants/enum';
import { toast } from 'react-toastify';

const toastNotification = (text, type) => {
  switch (type) {
    case Notification.success:
      toast(text, {
        type: 'success',
      });
      break;
    case Notification.error:
      toast(text, {
        type: 'error',
      });
      break;
    case Notification.info:
      toast(text, {
        type: 'info',
      });
      break;
    case Notification.warning:
      toast(text, {
        type: 'warning',
      });
      break;
    default:
      return;
  }
};

export default toastNotification;
