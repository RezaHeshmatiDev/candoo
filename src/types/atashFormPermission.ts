export default interface IAtashFormPermission {
    id: number;
    description: string;
    systemId: number;
    formTypeId: number;
    component: string;
    iconClass: string;
    isButton: boolean;
    apiMethod: string;
}
