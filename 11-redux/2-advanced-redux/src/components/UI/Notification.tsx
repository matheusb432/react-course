import { NotificationTypes } from '../../types';
import classes from './Notification.module.scss';

interface NotificationProps {
  title: string;
  message: string;
  status: NotificationTypes;
}

const Notification = ({ title, message, status }: NotificationProps) => {
  let specialClasses = '';

  if (status === NotificationTypes.Error) {
    specialClasses = classes.error;
  }
  if (status === NotificationTypes.Success) {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
