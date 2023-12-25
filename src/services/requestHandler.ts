import axios, { AxiosResponse } from "axios";

type SuccessResponse<T> = {
  code: "success";
  data: T;
};

type ErrorResponse<E = BaseError> = {
  code: "error";
  error: E;
};

export type BaseError = {
  code: string;
  message: string;
};

const doRequest = async <T>(
  request: () => Promise<AxiosResponse<{ data: T }>>,
): Promise<SuccessResponse<T> | ErrorResponse<BaseError>> => {
  try {
    const response = await request();
    return { code: "success", data: response.data.data };
  } catch (e) {
    return {
      code: "error",
      error: { code: "error_code", message: "error message" },
    };
  }
};

const setBaseUrl = (url: string) => {
  const baseUrl = "https://invoices-manager-backend.vercel.app";
  return `${baseUrl}${url}`;
};

export const doGet = async <T>(path: string) => {
  return doRequest<T>(() => axios.get(setBaseUrl(path)));
};

export const doPost = async <T>(path: string, body: T) => {
  return doRequest<T>(() => axios.post(setBaseUrl(path), body));
};

export const doPut = async <T>(path: string, body: T) => {
  return doRequest<T>(() => axios.put(setBaseUrl(path), body));
};

export const doDelete = async <T>(path: string) => {
  return doRequest<T>(() => axios.delete(setBaseUrl(path)));
};
