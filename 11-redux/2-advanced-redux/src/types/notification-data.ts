export interface NotificationData {
  status: NotificationTypes;
  title: string;
  message: string;
}

export enum NotificationTypes {
  Success = 'success',
  Error = 'error',
  Pending = 'pending',
}
