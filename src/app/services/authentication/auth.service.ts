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
  tokenSubject: BehaviorSubject<any>;
  loged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  onLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<any>(sessionStorage.getItem('token') || '{}');
    sessionStorage.getItem('token') && sessionStorage.getItem('token') !== '{}' ? this.loged.next(true) : this.loged.next(false);
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
      responseType: 'text' as 'json',
    }).pipe(
      map(res => {
        sessionStorage.setItem('token', res);
        this.tokenSubject.next(res);
        sessionStorage.getItem('token') && sessionStorage.getItem('token') !== '{}' ? this.loged.next(true) : this.loged.next(false);
      })
    );
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.clear();
    this.tokenSubject.next('{}');
    this.loged.next(false);
    console.log("session cerrada");
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, data);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loged.asObservable();
  }

  get Token() {
    return this.tokenSubject.value;
  }

  initApi(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/api/init`);
  }
}

