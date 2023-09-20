import IInventoryDispatchTypeUsers from "./inventoryDispatchTypeUsers";

export default interface IInventoryDispatchType {
    id: number;
    name: string;
    debitAccountCode: string;
    debitAccountParentCode: string;
    creditAccountCode: string;
    creditAccountParentCode: string;
    lastAllowableStateId?: number;
    getManualValue?: boolean;
    pricingDocGenerationTypeId?: number;
    tblInventoryDispatchTypeUsers: IInventoryDispatchTypeUsers[];
}