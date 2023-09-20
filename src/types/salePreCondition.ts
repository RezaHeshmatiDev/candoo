import ISaleInvoice from "./saleInvoice";

export default interface ISalePreCondition {
    id: number;
    name: string;
    clearDateNum?: number;
    discountPercent?: number;
    saleInvoice: ISaleInvoice[];
    // saleOrder: TblSaleOrder[];
}