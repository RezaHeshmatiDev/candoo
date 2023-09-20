import ISalePricingMethod from "./salePricingMethod";
import IUser from "./user";

export default interface ISalePricingMethodUser {
    pricingMethodId: number;
    userId: number;
    sequence?: number;
    isDefault?: boolean;
    pricingMethod: ISalePricingMethod;
    user: IUser;
}