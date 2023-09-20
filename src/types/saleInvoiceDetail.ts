import IEmployee from "./employee";
import IGood from "./good";
import ISaleInvoice from "./saleInvoice";
import ISalePricingMethod from "./salePricingMethod";

export default interface ISaleInvoiceDetail {
    qty?: number;
    invoiceId: number;
    barCode: string;
    description: string;
    discountTypeId?: number;
    discountPercent?: number;
    discountValue?: number;
    retailPrice: number;
    rowNumber?: number;
    scaleId: number;
    initialQty?: number;
    initialScaleId?: number;
    changeReasonSequence?: number;
    isEchantillon?: boolean;
    servicedBarCode: string;
    pricingMethodId?: number;
    promoterId?: number;
    barCodeNavigation?: IGood;
    invoice: ISaleInvoice;
    pricingMethod?: ISalePricingMethod;
    promoter?: IEmployee;
}