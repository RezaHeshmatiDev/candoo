import IGoodSaleScale from "./goodSaleScale";

export default interface IGoodScale {
    id: number;
    name: string;
    parentId?: number;
    scaleToBaseParent?: number;
    isInteger?: boolean;

    parent: IGoodScale;
    inverseParent: IGoodScale[];
    tblGoodSaleScale: IGoodSaleScale[];
}