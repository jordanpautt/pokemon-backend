export interface IAxiosOption {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  baseUrl: string;
  data: string;
  query: string;
  headers: string;
}
