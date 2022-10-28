import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Company} from "../api/company";
import { HttpHeaders } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  headerDict = {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Origin": '*',
  };

  constructor(private http: HttpClient) { }

  private companies: Company[];

  loadAllCompanies() {
    return this.companies;
  }

  addCompany(company: Company) {
    return this.http
      .post<any>(
        `${environment.apiAdmin}/api/v1/companies/add/company`, company,  {
          headers: new HttpHeaders( this.headerDict ),
         }
      )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );

  }

  editCompany(company: Company): Observable<Company> {
    return this.http.put<any>(`${environment.apiAdmin}/api/v1/companies/edit/company`, company, {
        headers: new HttpHeaders( this.headerDict ),
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  getCompanies() : Observable<Array<Company>> {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/companies/company/list`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {
          this.companies = res;
          return res
        }),
        catchError(this.handleError)
      );
  }

  getCompanyById(id: string) {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/companies/{id}`, {
      headers: new HttpHeaders( this.headerDict )
    }
  )
  .pipe(
      map((res) => {return res}),
      catchError(this.handleError)
    );
  }

  deleteCompany(id: number) {

    console.log(id);
    return this.http.delete<any>(`${environment.apiAdmin}/api/v1/companies/${id}`, {
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

