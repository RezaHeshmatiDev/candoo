import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getToken, removeToken } from "../utils/tokenFuncs";

//TODO:add baseURL later
const instance:()=>AxiosInstance = () =>
  axios.create({
    // baseURL: ,
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

instance().interceptors.response.use((res:AxiosResponse)=>{
    if(res.status==401) {
       removeToken();
       window.location.href="/";
    }
    return res;
})

export default instance;
