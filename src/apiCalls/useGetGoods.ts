import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult } from "react-query";
import instance from "./instance";
import IGood from "../types/good";

type UseGetGoods = () => UseMutationResult<
    AxiosResponse<IGood[]>,
    AxiosError
>;

type GetGoods = () => Promise<AxiosResponse>;

const getGoods: GetGoods = () =>
    instance().get(`/basic/getGoods`);
const useGetGoods: UseGetGoods = () => {
    return useMutation(() => getGoods());
};

export default useGetGoods;
