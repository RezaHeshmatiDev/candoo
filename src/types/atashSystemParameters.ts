import IAtashSystem from "./atashSystem";

export default interface IAtashSystemParameters {
    id: number;
    systemId?: number;
    value: string;
    userId: number;
    description: string;
    system: IAtashSystem;
}