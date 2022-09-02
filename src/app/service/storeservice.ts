import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "../api/store";

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

  addStore(store: Store) {
    return this.http.post<any>('http://localhost:8080/v1/store/', store)
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  editStore(store: Store) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getStores() {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getStoreById(id: string) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  deleteStore(id: string) {
    return this.http.delete<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }
}
