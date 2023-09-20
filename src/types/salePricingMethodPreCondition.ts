import ISalePricingMethod from "./salePricingMethod";

export default interface ISalePricingMethodPreCondition {
    pricingMethodId: number;
    preConditionId: number;
    pricingMethod: ISalePricingMethod;
}