import IGood from "./good";
import IInventoryReceipt from "./inventoryReceipt";

export default interface IInventoryReceiptDetail {
    receiptId: number;
    barcode: string;
    scaleId: number;
    qty: number;
    estimatedValue?: number;
    value?: number;
    scaleQty?: number;
    rowNumber?: number;
    description: string;
    accountId?: number;
    classId1?: number;
    objectId1?: number;
    classId2?: number;
    objectId2?: number;
    classId3?: number;
    objectId3?: number;
    contractId?: number;
    averageValue?: number;
    barcodeNavigation: IGood;
    receipt: IInventoryReceipt;
}