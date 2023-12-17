import axios, { AxiosResponse } from "axios";

type SuccessResponse<T> = {
  code: "success";
  data: T;
};

type ErrorResponse<E = Error> = {
  code: "error";
  error: E;
};

type Error = {
  code: string;
  message: string;
};

const doRequest = async <T>(
  request: () => Promise<AxiosResponse<T>>,
): Promise<SuccessResponse<T> | ErrorResponse<Error>> => {
  try {
    const response = await request();
    return { code: "success", data: response.data };
  } catch (e) {
    return {
      code: "error",
      error: { code: "error_code", message: "error message" },
    };
  }
};

export const doGet = async <T>(url: string) => {
  return doRequest<T>(() => axios.get(url));
};

export const doPost = async <T>(url: string, body: T) => {
  return doRequest<T>(() => axios.post(url, body));
};

export const doPut = async <T>(url: string, body: T) => {
  return doRequest<T>(() => axios.put(url, body));
};

export const doDelete = async <T>(url: string) => {
  return doRequest<T>(() => axios.delete(url));
};
