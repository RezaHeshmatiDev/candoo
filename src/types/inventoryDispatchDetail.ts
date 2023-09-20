import IGood from "./good";

export default interface IInventoryDispatchDetail {
    dispatchId: number;
    barcode: string;
    scaleId: number;
    qty?: number;
    value?: number;
    description: string;
    scaleQty?: number;
    rowNumber?: number;
    accountId?: number;
    classId1?: number;
    objectId1?: number;
    classId2?: number;
    objectId2?: number;
    classId3?: number;
    objectId3?: number;
    contractId?: number;
    tempQty?: number;
    averageValue?: number;
    barcodeNavigation: IGood;
}