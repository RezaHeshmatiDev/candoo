import IRecPayCashTurn from "./recPayCashTurn";
import IRecPayCashUsers from "./recPayCashUsers";

export default interface IRecPayCash {
    id: number;
    accountId?: number;
    name: string;
    code: string;
    parentId?: number;
    branchId?: number;
    parent: IRecPayCash | null;
    inverseParent: IRecPayCash[];
    tblRecPayCashTurn: IRecPayCashTurn[];
    tblRecPayCashUsers: IRecPayCashUsers[];
}