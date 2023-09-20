import IGoodSaleInfo from "./goodSaleInfo";
import IGoodSaleScale from "./goodSaleScale";
import IInventoryDispatchDetail from "./inventoryDispatchDetail";
import IInventoryReceiptDetail from "./inventoryReceiptDetail";
import ISaleInvoiceDetail from "./saleInvoiceDetail";


export default interface IGood {
    id: number;
    barcode: string;
    goodGroupId: number;
    code: string;
    name: string;
    name2: string;
    name3: string;
    retailPrice: number;
    notes: string;
    saleScaleId: number;
    purchaseScaleId: number;
    typeId: number;
    currencyRetailPrice: number;
    currencyTypeId: number;
    standardDiscountPercent: number;
    standardDiscountValue: number;
    loanExpireDuration: number;
    esTreshold: number;
    standardPrice: number;
    customerPrice: number;
    oldRetailPrice: number;
    purchaseRetailPrice: number;
    tabletVisible: boolean;
    sequence: number;
    isTraceable: boolean;
    createDate: Date;
    farsiCreateDate: string;
    expireDate: Date;
    farsiExpireDate: string;
    tblGoodSaleInfo: IGoodSaleInfo[];
    tblGoodSaleScale: IGoodSaleScale[];
    tblInventoryDispatchDetail: IInventoryDispatchDetail[];
    TblInventoryReceiptDetail: IInventoryReceiptDetail[];
    TblSaleInvoiceDetail: ISaleInvoiceDetail[];
}