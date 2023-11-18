export interface Response<T> {
  data: T | undefined;
  error: ResponseError | undefined;
}

export interface ResponseError {
  statusCode: number;
  errorCode: string;
  errorMessage: string;
}
