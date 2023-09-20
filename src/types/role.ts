import IRolePermission from "./rolePermission";
import IRolePermissionOnReport from "./rolePermissionOnReport";
import IUserRole from "./userRole";


export default interface IRole {
    id: number;
    name: string;
    isAdmin?: boolean;
    tblRolePermission: IRolePermission[];
    tblRolePermissionOnReport: IRolePermissionOnReport[];
    tblUserRole: IUserRole[];
}