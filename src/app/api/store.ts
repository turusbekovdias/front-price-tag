import {Company} from "./company";

export interface Store {
  id?: string;
  country?: string;
  city?: string;
  registrationDate?: string;
  storeAddress?: string;
  storeStatus?: string;
  image?: string;
  description?: string;
  company?: Company;
}
