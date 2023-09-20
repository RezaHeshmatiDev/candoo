import IUser from "./user";

export default interface IUserAccountPeriod {
    userId: number;
    accountPeriodId: number;
    isActive: boolean;
    user: IUser;
}