import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.baseUrl, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }
  
}
