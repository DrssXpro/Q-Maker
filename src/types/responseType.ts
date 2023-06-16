export interface IResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}
