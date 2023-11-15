export interface Response<T> {
  data: T | undefined;
  error: ResponseError | undefined;
}

export type ResponseError = {
  statusCode: number;
  errorCode: string;
  errorMessage: string;
};
