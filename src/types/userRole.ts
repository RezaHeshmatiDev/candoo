import IRole from "./role";
import IUser from "./user";


export default interface IUserRole {
    userId: number;
    roleId: number;
    role: IRole;
    user: IUser;
}