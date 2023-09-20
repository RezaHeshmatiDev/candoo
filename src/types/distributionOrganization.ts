import IDistributionPath from "./distributionPath";
import IOrganization from "./organization";
import ISalePricingMethod from "./salePricingMethod";



export default interface IDistributionOrganization {
    organizationId: number;
    ownerName: string;
    meters?: number;
    ownerTypeId?: number;
    hasLabel?: boolean;
    fromLabelDate?: Date;
    farsiFromLabelDate?: string;
    endLabelDate?: Date;
    farsiEndLabelDate?: string;
    enableCredit?: boolean;
    credit?: number;
    enableDocumentCredit?: boolean;
    documentCredit?: number;
    enableExtraCredit?: boolean;
    extraCreditBeginDate?: Date;
    farsiExtraCreditBeginDate?: string;
    extraCreditEndDate?: Date;
    farsiExtraCreditEndDate?: string;
    extraCredit?: number;
    pathId: number;
    distributerPathId?: number;
    stationNo?: number;
    branchId: number;
    achieverPathId?: number;
    pricingMethodId?: number;
    isRetail?: boolean;
    storeName?: string;
    nationalCode?: string;
    economicCode?: string;
    postalCode?: string;
    notInvoicedVisitNo?: number;
    priorityNo?: number;
    workPermissionNo?: string;
    workPermissionEndDate?: Date;
    farsiWorkPermissionEndDate?: string;
    degreeCodeNo?: number;
    promoterPriorityCode?: string;
    achieverPath?: IDistributionPath;
    distributerPath?: IDistributionPath;
    organization?: IOrganization;
    path?: IDistributionPath;
    pricingMethod?: ISalePricingMethod;
}