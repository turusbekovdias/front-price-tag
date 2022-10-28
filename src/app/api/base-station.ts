import {Store} from "./store";

export interface BaseStation {
  id?: number;
  ipAddress?: string;
  store?: Store;
  status?: string;
  registrationDate?: string;
}
