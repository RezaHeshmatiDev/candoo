import IDistributionPath from "./distributionPath";

export default interface IDistributionPathPromoters {
    id: number;
    pathId: number;
    employeeId: number;
    nonAchievedMaxValue?: number;
    priorityNo?: number;
    path: IDistributionPath;
}