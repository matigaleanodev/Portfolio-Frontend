import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from './interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = `${environment.API_URL}/auth`;
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    console.log('Authentication Service Initialized...');
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser') || '{}');
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
      responseType: 'text' as 'json',
    }).pipe(
      map(res => {
        sessionStorage.setItem('currentUser', res);
        this.currentUserSubject.next(res);
      })
    );
  }

  get CurrentUser() {
    return this.currentUserSubject.value;
  }
}

