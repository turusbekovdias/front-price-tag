import {BaseStation} from "./base-station";
import {ProductItem} from "./product-item";

export interface PriceTag {
  id?: number;
  tagCode?: string;
  baseStation?: BaseStation;
  registrationDate?: string;
  status?: string;
  productItem?: ProductItem;
}
