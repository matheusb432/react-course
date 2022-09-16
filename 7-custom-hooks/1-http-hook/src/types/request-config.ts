export interface RequestConfig {
  url: string;
  options?: RequestInit;
  handleData?: (data?: any) => void;
}
