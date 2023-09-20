import IInventory from "./inventory";
import IUser from "./user";

export default interface IInventoryUser {
    inventoryId: number;
    userId: number;
    isPrimary?: boolean;
    inventory: IInventory;
    user: IUser;
}