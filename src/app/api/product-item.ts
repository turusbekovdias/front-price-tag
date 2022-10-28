import {Store} from "./store";
import {BaseStation} from "./base-station";

export interface ProductItem {

  id?: number;
  status?: string;
  station?: BaseStation;

  barCode?: string;
  attrCategory?: string;
  attrName?: string;
  productCode?: string;
  productSku?: string;
  itemTitle?: string;
  shortTitle?: string;
  classLevel?: string;
  productArea?: string;
  unit?: string;
  qrCode?: string;
  nfcUrl?: string;
  spec?: string;
  originalPrice?: number;
  price?: number;
  memberPrice?: number;
  stock1?: number;
  stock2?: number;
  stock3?: number;
  promotionText?: string;
  custFeature1?: string;
  custFeature2?: string;
  custFeature3?: string;
  custFeature4?: string;
  custFeature5?: string;
  custFeature6?: string;
  custFeature7?: string;
  custFeature8?: string;
  custFeature9?: string;
  custFeature10?: string;
  custFeature11?: string;
  custFeature12?: string;
  custFeature13?: string;
  custFeature14?: string;
  custFeature15?: string;
}
