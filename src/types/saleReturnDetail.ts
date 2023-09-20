import ISaleReturn from "./saleReturn";

export default interface ISaleReturnDetail {
    qty: number;
    scaleId?: number;
    barcode: string;
    returnId: number;
    discountPercent?: number;
    retailPrice?: number;
    rowNumber?: number;
    discountValue?: number;
    discountTypeId?: number;
    description?: string;
    return: ISaleReturn;
}