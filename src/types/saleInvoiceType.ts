import ISaleInvoice from "./saleInvoice";
import IUserSaleInvoiceType from "./userSaleInvoiceType";

export default interface ISaleInvoiceType {
    id: number;
    name: string;
    creditAccountId?: number;
    debitAccountId?: number;
    discountAccountId?: number;
    returnAccountId?: number;
    taxAccountId?: number;
    addedAccountId?: number;
    generateSaleAssignment?: boolean;
    descAccountId?: number;
    suchargeAccountId?: number;
    totalDiscountAccountId?: number;
    stackholderDiscountAccountId?: number;
    adversDiscountAccountId?: number;
    eduDiscountAccountId?: number;
    stackholderShareAccountId?: number;
    adversShareAccountId?: number;
    eduShareAccountId?: number;
    roundAccountId?: number;
    sequence?: number;
    saleInvoice: ISaleInvoice[];
    userSaleInvoiceType: IUserSaleInvoiceType[];
}