import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "../api/store";
import {BaseStation} from "../api/base-station";

@Injectable()
export class BaseStationService {

  constructor(private http: HttpClient) { }

  addBaseStation(station: BaseStation) {
    return this.http.post<any>('http://localhost:8080/v1/store/', station)
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  editBaseStation(station: BaseStation) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getBaseStations() {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getBaseStationsById(id: string) {
    return this.http.get<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  deleteBaseStation(id: string) {
    return this.http.delete<any>('http://localhost:8080/v1/store/')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }
}
