import ISaleInvoice from "./saleInvoice";
import ISaleReturnDetail from "./saleReturnDetail";

export default interface ISaleReturn {
    id: number;
    code?: number;
    customerId?: number;
    creatorId?: number;
    createDate: Date;
    farsiCreateDate?: string;
    totalValue: number;
    penaltyValue?: number;
    notes?: string;
    saleInvoiceId?: number;
    pureTotalValue: number;
    inventoryId?: number;
    contractId?: number;
    typeId?: number;
    isPaidByCash?: boolean;
    promoterId?: number;
    discountTypeId: number;
    discountPercent?: number;
    discountValue?: number;
    suchargeValue?: number;
    isFromReceipt?: boolean;
    manualCode?: string;
    shortageValue?: number;
    branchId?: number;
    objectId1?: number;
    objectId2?: number;
    isFormal?: boolean;
    saleInvoice: ISaleInvoice;
    saleReturnDetail: ISaleReturnDetail[];
}