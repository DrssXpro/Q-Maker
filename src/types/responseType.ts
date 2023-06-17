export interface IResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}

export interface IList<T> {
  count: number;
  rows: T[];
}
