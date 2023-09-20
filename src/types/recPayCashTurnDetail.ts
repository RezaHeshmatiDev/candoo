import IRecPayCashTurn from "./recPayCashTurn";

export default interface IRecPayCashTurnDetail {
    id: number;
    cashTurnId: number;
    code?: number;
    transactionDate: Date;
    farsiTransactionDate: string;
    description: string;
    receivedValue: number;
    payedValue: number;
    relatedAccountId?: number;
    contractId?: number;
    formId?: number;
    formTypeId?: number;
    achieverId?: number;
    branchId?: number;
    classId1?: number;
    objectId1?: number;
    classId2?: number;
    objectId2?: number;
    classId3?: number;
    objectId3?: number;
    userId?: number;
    cashTurn: IRecPayCashTurn;
}