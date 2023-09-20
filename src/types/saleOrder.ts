import IEmployee from "./employee";
import IInventory from "./inventory";
import ISaleInvoiceType from "./saleInvoiceType";
import ISaleOrderDetail from "./saleOrderDetail";
import ISalePreCondition from "./salePreCondition";
import ISalePricingMethod from "./salePricingMethod";
import IUser from "./user";

export default interface ISaleOrder {
    id: number;
    createDate: Date;
    farsiCreateDate: string;
    discountTypeId: number;
    discountValue?: number;
    discountPercent?: number;
    suchargeValue?: number;
    notes: string;
    totalValue: number;
    code?: number;
    creatorId?: number;
    customerId?: number;
    customerMessage: string;
    preReceivedValue: number;
    inventoryId?: number;
    typeId?: number;
    isPaidByCash: boolean;
    promoterId?: number;
    manualCode?: number;
    pricingMethodId?: number;
    shortageValue?: number;
    deliverDate: Date;
    farsiDeliverDate: string;
    preConditionId?: number;
    clearDaysNum?: number;
    objectId1?: number;
    objectId2?: number;
    branchId?: number;
    long?: number;
    lat?: number;
    deliverTypeId?: number;
    promoterId2?: number;
    transfer?: boolean;
    creator?: IUser;
    inventory?: IInventory;
    pricingMethod?: ISalePricingMethod;
    promoter?: IEmployee;
    promoter2?: IEmployee;
    type?: ISaleInvoiceType;
    preCondition?: ISalePreCondition;
    tblSaleOrderDetail: ISaleOrderDetail[];
}