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
export class ProductImportService {

  headerDict = {
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Origin": '*',
  };

  constructor(private http: HttpClient) { }

  addItem(file: File) {
    let formData = new FormData();
    formData.append("file", file);

    console.log(formData);

    return this.http
      .post<any>(
        `${environment.apiAdmin}/api/v1/excel/import-items`, formData,  {
          headers: new HttpHeaders( this.headerDict ),
        }
      )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );

  }

  saveNew(items: ProductItem[]) {
    return this.http
      .post<any>(
        `${environment.apiAdmin}/api/v1/excel/save-imports`, items,  {
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
