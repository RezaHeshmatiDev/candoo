import IRecPayCash from "./recPayCash";
import IUser from "./user";

export default interface IRecPayCashUsers {
    cashId: number;
    userId: number;
    isOwner?: boolean;
    cash: IRecPayCash;
    user: IUser;
}