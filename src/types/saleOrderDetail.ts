import IGoodScale from "./goodScale";
import ISaleOrder from "./saleOrder";
import ISalePricingMethod from "./salePricingMethod";

export default interface ISaleOrderDetail {
    qty: number;
    barCode: string;
    scaleId: number;
    orderId: number;
    description: string;
    discountPercent?: number;
    retailPrice: number;
    rowNumber?: number;
    pricingMethodId?: number;
    isEchantillon?: boolean;
    order: ISaleOrder;
    scale: IGoodScale;
    pricingMethod: ISalePricingMethod;
}