import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "../api/store";
import {PriceTag} from "../api/price-tag";

@Injectable()
export class PriceTagService {

  constructor(private http: HttpClient) { }

  addPriceTag(tag: PriceTag) {
    return this.http.post<any>('http://localhost:8080/v1/store/', tag)
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  editPriceTag(tag: PriceTag) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getPriceTags() {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getPriceTagById(id: string) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  deletePriceTag(id: string) {
    return this.http.delete<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }
}
