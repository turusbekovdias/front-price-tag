import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Store} from "../api/store";
import {ProductItem} from "../api/product-item";
import {Company} from "../api/company";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  headerDict = {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Origin": '*',
  };

  private items: ProductItem[];

  constructor(private http: HttpClient) { }

  takeAllItems() {
    return this.items;
  }


  addItem(item: ProductItem) {
    return this.http
      .post<any>(
        `${environment.apiAdmin}/api/v1/products/add/product`, item,  {
          headers: new HttpHeaders( this.headerDict ),
        }
      )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );

  }

  editItem(item: ProductItem): Observable<ProductItem> {
    return this.http.put<any>(`${environment.apiAdmin}/api/v1/products/edit/product`, item, {
        headers: new HttpHeaders( this.headerDict ),
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  getItems() : Observable<Array<ProductItem>> {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/products/product/list`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {
          this.items = res;
          return res;
        }),
        catchError(this.handleError)
      );
  }

  getItemById(id: string) {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/products/{id}`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  deleteItem(id: number) {
    return this.http.delete<any>(`${environment.apiAdmin}/api/v1/products/`+`${id}`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
