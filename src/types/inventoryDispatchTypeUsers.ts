import IInventoryDispatchType from "./inventoryDispatchType";
import IUser from "./user";

export default interface IInventoryDispatchTypeUsers {
    userId: number;
    dispatchTypeId: number;
    dispatchType: IInventoryDispatchType;
    user: IUser;
}