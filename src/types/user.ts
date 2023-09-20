import IAtashFormType from "./atashFormType";
import IAtashSystemParametersUser from "./atashSystemParametersUser";
import IEmployee from "./employee";
import IInventory from "./inventory";
import IInventoryDispatchTypeUsers from "./inventoryDispatchTypeUsers";
import IInventoryUser from "./inventoryUser";
import IRecPayCashTurnUser from "./recPayCashTurnUser";
import IRecPayCashUsers from "./recPayCashUsers";
import ISaleInvoice from "./saleInvoice";
import ISalePricingMethodUser from "./salePricingMethodUser";
import IUserAccountPeriod from "./userAccountPeriod";
import IUserRole from "./userRole";
import IUserSaleInvoiceType from "./userSaleInvoiceType";

export default interface IUser {
    id: number;
    userName: string;
    fullName: string;
    notes: string;
    userPassword: string;
    branchId?: number;
    siteUserId: string;
    tblAtashFormType: IAtashFormType[];
    tblAtashSystemParametersUser: IAtashSystemParametersUser[];
    tblEmployee: IEmployee[];
    tblInventory: IInventory[];
    tblInventoryDispatchTypeUsers: IInventoryDispatchTypeUsers[];
    tblInventoryUser: IInventoryUser[];
    tblRecPayCashTurnUser: IRecPayCashTurnUser[];
    tblRecPayCashUsers: IRecPayCashUsers[];
    tblSaleInvoice: ISaleInvoice[];
    tblSalePricingMethodUser: ISalePricingMethodUser[];
    tblUserAccountPeriod: IUserAccountPeriod[];
    tblUserRole: IUserRole[];
    tblUserSaleInvoiceType: IUserSaleInvoiceType[];
}