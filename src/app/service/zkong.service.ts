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
export class ZkongService {

  headerDict = {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Origin": '*',
  };

  constructor(private http: HttpClient) { }

  importItems() {
    return this.http
      .get<any>(
        `${environment.apiAdmin}/api/v1/zkong/import-items`,  {
          headers: new HttpHeaders( this.headerDict ),
        }
      )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );

  }

  bindTagsWithItems() {
    return this.http
      .get<any>(
        `${environment.apiAdmin}/api/v1/zkong/bind-tags-items`,  {
          headers: new HttpHeaders( this.headerDict ),
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
