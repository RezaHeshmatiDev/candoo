import IDistributionOrganization from "./distributionOrganization";
import IEmployee from "./employee";
import IGoodSaleInfo from "./goodSaleInfo";
import ISaleInvoice from "./saleInvoice";
import ISaleInvoiceDetail from "./saleInvoiceDetail";
import ISaleOrderDetail from "./saleOrderDetail";
import ISalePricingMethodPreCondition from "./salePricingMethodPreCondition";
import ISalePricingMethodUser from "./salePricingMethodUser";


export default interface ISalePricingMethod {
    id: number;
    name: string;
    makeVisibleInSelection?: boolean;
    sequence?: number;
    tblDistributionOrganization: IDistributionOrganization[];
    tblEmployee: IEmployee[];
    tblGoodSaleInfo: IGoodSaleInfo[];
    tblSaleInvoice: ISaleInvoice[];
    tblSaleInvoiceDetail: ISaleInvoiceDetail[];
    tblSaleOrderDetail: ISaleOrderDetail[];
    tblSalePricingMethodPreCondition: ISalePricingMethodPreCondition[];
    tblSalePricingMethodUser: ISalePricingMethodUser[];
}