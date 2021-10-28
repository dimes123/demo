export interface Response<T> {
  status: string;
  data: T;
  message: string;
}

export interface ResponseList<T> {
  status: string;
  data: Array<T>;
  message: string;
}

export interface DeleteResponse {
  status: string;
  message: string;
}
