import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getToken, removeToken } from "../utils/tokenFuncs";

const instance: () => AxiosInstance = () =>
  axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(getToken()
        ? {
          Authorization: `Bearer ${getToken()}`,
        }
        : undefined),
    },
  });


instance().interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  //some useFull logs over reqs in dev mode
  if (import.meta.env.DEV) {
    console.log("<------- IN REQUEST ------->")
    const { url, params, method } = config;
    console.log(url, params, method)
  }

  return config;
})

instance().interceptors.response.use((res: AxiosResponse): AxiosResponse['data'] => {
  //some useFull logs over responses in dev mode
  if (import.meta.env.DEV) {
    console.log("<------- IN RESPONSE ------->")
    const {
      statusText,
      status
    } = res;
    console.log({ status, statusText })
  }


  if (res.status == 401) {
    removeToken();
    window.location.href = "/";
  }
  return res.data;
})

export default instance;
