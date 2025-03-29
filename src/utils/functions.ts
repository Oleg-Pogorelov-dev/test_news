import { notification } from 'antd';

interface Message {
  title: string;
  type?: 'error' | 'info';
}

export const message = ({ title, type = 'info' }: Message) => {
  const key = Date.now().toString();

  return notification[type]({
    message: title,
    className: 'custom-notification',
    duration: 3,
    placement: 'topRight',
    key,
    onClick: () => {
      notification.destroy(key);
    },
  });
};
