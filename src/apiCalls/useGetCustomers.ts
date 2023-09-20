import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult } from "react-query";
import instance from "./instance";


interface ICustomer  {
    name: string;
    firstName: string;
    id: number;
    cellPhone: string;
    address: string;
    code: string;
  }

interface IVariables  {
  query: string;
}

type UseGetCustomers = () => UseMutationResult<
  AxiosResponse<ICustomer[]>,
  AxiosError,
  IVariables
>;

type GetCustomers = (vars: IVariables) => Promise<AxiosResponse>;

const getCustomers: GetCustomers = ({ query }) =>
  instance().get(`/sale/GetObjects/4/${query}`);
const useGetCustomers: UseGetCustomers = () => {
  return useMutation((vars: IVariables) => getCustomers(vars));
};

export default useGetCustomers;
