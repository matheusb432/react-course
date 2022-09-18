import { AxiosRequestConfig } from 'axios';

export interface UseHttpOptions<T = any> extends AxiosRequestConfig<T> {
  handleData?: (data: T) => T;
}
