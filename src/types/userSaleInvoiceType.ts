import ISaleInvoiceType from "./saleInvoiceType";
import IUser from "./user";

export default interface IUserSaleInvoiceType {
    userId: number;
    invoiceTypeId: number;
    invoiceType: ISaleInvoiceType;
    user: IUser;
}