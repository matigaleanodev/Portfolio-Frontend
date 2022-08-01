import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Profile } from 'src/app/models/profile.interface';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = `${environment.API_URL}/api/profile`;

  constructor(private http: HttpClient) {}
  
  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.baseUrl, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  postProfile(data: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putProfile(data: Profile): Observable<Profile> {
    console.log(data);
    return this.http.put<Profile>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }
  
}
