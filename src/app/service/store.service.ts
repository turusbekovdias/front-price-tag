import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Store} from "../api/store";
import {Company} from "../api/company";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private stores: Store[];

  headerDict = {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Origin": '*',
  };

  constructor(private http: HttpClient) { }

  getAllStores() {
    return this.stores;
  }

  addStore(store: Store) {
    return this.http
      .post<any>(
        `${environment.apiAdmin}/api/v1/stores/add/store`, store,  {
          headers: new HttpHeaders( this.headerDict ),
        }
      )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );

  }

  editStore(store: Store): Observable<Store> {
    return this.http.put<any>(`${environment.apiAdmin}/api/v1/stores/edit/store`, store, {
        headers: new HttpHeaders( this.headerDict ),
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  getStores() : Observable<Array<Store>> {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/stores/store/list`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {
          this.stores = res;
          return res}),
        catchError(this.handleError)
      );
  }

  getStoreById(id: string) {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/stores/{id}`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  deleteStore(id: string) {
    return this.http.delete<any>(`${environment.apiAdmin}/api/v1/stores/delete/store`, {
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
