import IUser from "./user";

export default interface IAtashSystemParametersUser {
    userId: number;
    systemParameterId: number;
    value: string;
    notes?: string;
    user: IUser;
}