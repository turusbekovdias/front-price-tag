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

  constructor(private http: HttpClient) { }


  addCompany(company: Company) : Observable<Company>{

    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
      'Access-Control-Max-Age': '1000',
      'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    return this.http
      .post<any>(
        `${environment.apiAdmin}/api/v1/companies/add/company`, company,  {
          headers: new HttpHeaders( headerDict ),
        }
      )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );

  }

  editCompany(company: Company) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getCompanies() {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getCompanyById(id: string) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  deleteCompany(id: string) {
    return this.http.delete<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
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

