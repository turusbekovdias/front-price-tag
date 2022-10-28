import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Store} from "../api/store";
import {BaseStation} from "../api/base-station";
import {Company} from "../api/company";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private stations: BaseStation[];

  headerDict = {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Origin": '*',
  };

  constructor(private http: HttpClient) { }

  getAllStations() {
    return this.stations;
  }

  addStation(station: BaseStation) {
    return this.http
      .post<any>(
        `${environment.apiAdmin}/api/v1/stations/add/station`, station,  {
          headers: new HttpHeaders( this.headerDict ),
        }
      )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );

  }

  editStation(station: BaseStation): Observable<BaseStation> {
    return this.http.put<any>(`${environment.apiAdmin}/api/v1/stations/edit/station`, station, {
        headers: new HttpHeaders( this.headerDict ),
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  getStations() : Observable<Array<BaseStation>> {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/stations/station/list`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {
          this.stations = res;
          return res
        }),
        catchError(this.handleError)
      );
  }

  getStationById(id: string) {
    return this.http.get<any>(`${environment.apiAdmin}/api/v1/stations/{id}`, {
        headers: new HttpHeaders( this.headerDict )
      }
    )
      .pipe(
        map((res) => {return res}),
        catchError(this.handleError)
      );
  }

  deleteStation(id: number) {
    return this.http.delete<any>(`${environment.apiAdmin}/api/v1/stations/delete/station`, {
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
