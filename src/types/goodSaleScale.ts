import IGood from "./good";
import IGoodScale from "./goodScale";

export default interface IGoodSaleScale {
    barcode: string;
    scaleId: number;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    siteVisible: boolean;
    barcodeNavigation: IGood;
    scale: IGoodScale;
}