import IInventoryDispatch from "./inventoryDispatch";
import IInventoryUser from "./inventoryUser";
import ISaleInvoice from "./saleInvoice";
import IUser from "./user";

export default interface IInventory {
    id: number;
    parentId?: number;
    code: string;
    name: string;
    typeId?: number;
    responsibleId?: number;
    statusTypeId?: number;
    isDefault: boolean;
    checkExistance?: boolean;
    relatedAccountId?: number;
    creditAccountId?: number;
    branchId?: number;
    updateDate?: Date;
    farsiUpdateDate?: string;
    possibleUpdateDate?: Date;
    farsiPossibleUpdateDate?: string;
    updateUserId?: number;
    parent: IInventory | null;
    updateUser: IUser | null;
    inverseParent: IInventory[];
    tblInventoryDispatch: IInventoryDispatch[];
    tblInventoryUser: IInventoryUser[];
    tblSaleInvoice: ISaleInvoice[];
}