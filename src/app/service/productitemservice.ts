import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "../api/store";
import {ProductItem} from "../api/product-item";

@Injectable()
export class ProductItemService {

  constructor(private http: HttpClient) { }

  addProductItem(item: ProductItem) {
    return this.http.post<any>('http://localhost:8080/v1/store/', item)
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  editProductItem(store: Store) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getProductItems() {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getProductItemById(id: string) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  deleteProductItem(id: string) {
    return this.http.delete<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }
}
