import IRole from "./role";

export default interface IRolePermissionOnReport {
    roleId: number;
    reportId: number;
    role: IRole;
}