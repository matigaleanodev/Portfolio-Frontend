import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { DataForm } from 'src/app/models/dataForm.model';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';


@Injectable({
  providedIn: 'root',
})
export class EducationService {
  baseUrl = `${environment.API_URL}/api/education`;

  constructor(private http: HttpClient) {}
  
  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getEducation(): Observable<DataForm[]> {
    return this.http.get<DataForm[]>(this.baseUrl, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  getEducationById(id: number): Observable<DataForm> {
    return this.http.get<DataForm>(`${this.baseUrl}/${id}`, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  postEducation(data: DataForm): Observable<DataForm> {
    return this.http.post<DataForm>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putEducation(data: DataForm): Observable<DataForm> {
    return this.http.put<DataForm>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  deleteEducation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }
}
