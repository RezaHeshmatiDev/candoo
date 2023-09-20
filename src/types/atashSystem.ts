import IAtashFormType from "./atashFormType";
import IAtashSystemParameters from "./atashSystemParameters";

export default interface IAtashSystem {
    id: number;
    name: string;
    description: string;
    makeHide?: boolean;
    sequence?: number;
    groupId?: number;
    // disable?: boolean;
    tblAtashFormType: IAtashFormType[];
    tblAtashSystemParameters: IAtashSystemParameters[];
}
