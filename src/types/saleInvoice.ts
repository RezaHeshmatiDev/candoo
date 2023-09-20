import IEmployee from "./employee";
import IInventory from "./inventory";
import ISaleInvoiceDetail from "./saleInvoiceDetail";
import ISaleInvoiceType from "./saleInvoiceType";
import ISalePreCondition from "./salePreCondition";
import ISalePricingMethod from "./salePricingMethod";
import ISaleReturn from "./saleReturn";
import IUser from "./user";


export default interface ISaleInvoice {
    id: number;
    createDate: Date;
    farsiCreateDate: string;
    discountTypeId: number;
    discountPercent?: number;
    discountValue?: number;
    suchargeValue?: number;
    notes: string;
    totalValue: number;
    code?: number;
    creatorId?: number;
    customerId?: number;
    customerMessage: string;
    saleOrderId?: number;
    pureTotalValue: number;
    promoterId?: number;
    isPaidByCash?: boolean;
    inventoryId?: number;
    contractId?: number;
    clearDate?: Date;
    farsiClearDate: string;
    manualCode: string;
    pricingMethodId?: number;
    distributionInvoiceId?: number;
    shortageValue?: number;
    typeId?: number;
    isFromDispatch?: boolean;
    achieverId?: number;
    distributerId?: number;
    deliverDate?: Date;
    farsiDeliverDate: string;
    preConditionId?: number;
    creditDays?: number;
    remCredit?: number;
    usedCredit?: number;
    objectId1?: number;
    objectId2?: number;
    branchId?: number;
    shouldSmssend?: boolean;
    creatorEmployeeId?: number;
    updaterId?: number;
    updateDate?: Date;
    farsiUpdateDate: string;
    printCount?: number;
    promoterId2?: number;
    cardNo?: number;
    lotteryPrintCount?: number;
    lastLotteryPrintUserId?: number;
    lastLotteryPrintDate?: Date;
    farsiLastLotteryPrintDate: string;
    deliverTypeId?: number;
    isFormal?: boolean;
    isCheckEchantillon?: boolean;
    introductionTypeId?: number;
    transfer: boolean;
    creator?: IUser;
    inventory?: IInventory;
    pricingMethod?: ISalePricingMethod;
    promoter?: IEmployee;
    promoterId2Navigation?: IEmployee;
    type?: ISaleInvoiceType;
    tblSaleInvoiceDetail: ISaleInvoiceDetail[];
    preCondition?: ISalePreCondition;
    tblSaleReturn: ISaleReturn[];
}