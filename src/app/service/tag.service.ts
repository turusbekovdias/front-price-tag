import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Store} from "../api/store";
import {PriceTag} from "../api/price-tag";
import {Company} from "../api/company";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  headerDict = {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Origin": '*',
  };

  private tags: PriceTag[];

  constructor(private http: HttpClient) { }

  loadAllTags() {
    return this.tags;
  }

  addTag(tag: PriceTag) {
    return this.http
      .post<any>(
        `${environment.apiAdmin}/api/v1/tags/add/tag`, tag,  {
          headers: new HttpHeaders( this.headerDict ),
        }
      )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );

  }

  editTag(tag: PriceTag): Observable<PriceTag> {
    return this.http.put<any>(`${environment.apiAdmin}/api/v1/tags/edit/tag`, tag, {
        headers: new HttpHeaders( this.headerDict ),
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  getTags() : Observable<Array<PriceTag>> {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/tags/tag/list`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {
          this.tags = res;
          return res
        }),
        catchError(this.handleError)
      );
  }

  getTagById(id: string) {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/tags/{id}`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  deleteTag(id: string) {
    return this.http.delete<any>(`${environment.apiAdmin}/api/v1/tags/delete/tag`, {
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
