import IRecPayCash from "./recPayCash";
import IRecPayCashTurnDetail from "./recPayCashTurnDetail";
import IRecPayCashTurnUser from "./recPayCashTurnUser";

export default interface IRecPayCashTurn {
    id: number;
    cashId: number;
    turn: number;
    userId: number;
    isOpen: number;
    openDate?: Date;
    farsiOpenDate?: string;
    closeDate?: Date;
    farsiCloseDate?: string;
    cash: IRecPayCash;
    tblRecPayCashTurnDetail: IRecPayCashTurnDetail[];
    tblRecPayCashTurnUser: IRecPayCashTurnUser[];
}