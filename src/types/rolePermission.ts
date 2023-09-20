import IAtashFormPermission from "./atashFormPermission";


export default interface IRolePermission {
    roleId: number;
    name: string;
    systemId: number;
    formPermissions: IAtashFormPermission[];
}