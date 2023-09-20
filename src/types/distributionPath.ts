import IDistributionOrganization from "./distributionOrganization";
import IDistributionPathPromoters from "./distributionPathPromoters";
import IEmployee from "./employee";


export default interface IDistributionPath {
    id: number;
    name: string;
    regionId: number;
    notes: string;
    code: string;
    tblDistributionOrganizationAchieverPath: IDistributionOrganization[];
    tblDistributionOrganizationDistributerPath: IDistributionOrganization[];
    tblDistributionOrganizationPath: IDistributionOrganization[];
    tblDistributionPathPromoters: IDistributionPathPromoters[];
    tblEmployee: IEmployee[];
}