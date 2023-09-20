import IGood from "./good";
import ISalePricingMethod from "./salePricingMethod";


export default interface IGoodSaleInfo {
    barcode: string;
    pricingMethodId: number;
    retailPrice: number;
    discountPercent: number;
    discountValue: number;
    isDiscountInPercent: boolean;
    loanExpireDuration: number;
    comGroupId: number;
    barcodeNavigation: IGood;
    pricingMethod: ISalePricingMethod;
} 