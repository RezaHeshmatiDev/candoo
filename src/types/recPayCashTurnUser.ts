import IRecPayCashTurn from "./recPayCashTurn";
import IUser from "./user";

export default interface IRecPayCashTurnUser {
    cashTurnId: number;
    userId: number;
    cashTurn: IRecPayCashTurn;
    user: IUser;
}