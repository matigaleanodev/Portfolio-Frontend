import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { DataForm } from '../../models/dataForm.model';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';


@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  baseUrl = `${environment.API_URL}/api/work`;

  constructor(private http: HttpClient) {}
  
  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getWorks(): Observable<DataForm[]> {
    return this.http.get<DataForm[]>(this.baseUrl, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });    
  }

  getWorkById(id: number): Observable<DataForm> {
    return this.http.get<DataForm>(`${this.baseUrl}/${id}`, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  postWork(data: DataForm): Observable<DataForm> {
    return this.http.post<DataForm>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putWork(data: DataForm): Observable<DataForm> {
    return this.http.put<DataForm>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  deleteWork(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }
}
