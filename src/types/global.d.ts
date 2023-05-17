
export {};

declare global {

    interface IFormPermissions  {
        id: number;
        description: string;
        systemId: number;
        formTypeId: number;
        component: string;
        iconClass: string;
        isButton: boolean;
        apiMethod: string;
      }
    
      interface IRolePermissions  {
        id: number;
        name: string;
        systemId: number;
        formPermissions: IFormPermissions[];
      }

    interface ISystem  {
        id: number;
        name: string;
        rolePermissions: IRolePermissions[];
      }
    interface ISystemGroup  {
        id: number;
        description: string;
        sequence: number;
        systems: ISystem[];
        route: string;
      }
}