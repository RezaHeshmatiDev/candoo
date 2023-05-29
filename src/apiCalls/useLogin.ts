import { AxiosError, AxiosResponse } from "axios";
import { UseMutateFunction, useMutation, UseMutationResult } from "react-query";
import instance from "./instance";
import IAtashSystemGroup from "../types/atashSystemGroup";


export interface ILoginParams {
  UserName: string;
  Password: string;
}

export interface ILoginResponse {
  auth: { token: string };
  accountingDetails: {
    DbName: string;
    ServerIpAddr: string;
    AccountPeriod: string;
  };
  ok: boolean;
  userInfo: {
    UserId: number;
    SessionId: number;
    UserName: string;
    ServerIpAddr?: string;
  };
  systemGroups: IAtashSystemGroup[];
}

type UseLogin = () => UseMutationResult<
  AxiosResponse<ILoginResponse>,
  AxiosError,
  ILoginParams,
  UseMutateFunction
>;

type GetUser = (auth: ILoginParams) => Promise<AxiosResponse>;

const getUser: GetUser = (auth: ILoginParams) =>
  instance().post("auth/newLogin", {
    ...auth,
  });
const useLogin: UseLogin = () => {
  return useMutation((auth: ILoginParams) => getUser(auth));
};

export default useLogin;