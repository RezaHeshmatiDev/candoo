import IAtashFormType from "./atashFormType";

export default interface IRolePermissionOnForm {
    roleId: number;
    formTypeId: number;
    formType: IAtashFormType;
}