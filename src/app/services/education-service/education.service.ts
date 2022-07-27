import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  baseUrl = `${environment.API_URL}/api/education`;

  constructor(private http: HttpClient) {}

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.baseUrl, { headers: httpOptions.headers });
  }

  getEducationById(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
  }

  postEducation(data: Education): Observable<Education> {
    return this.http.post<Education>(this.baseUrl, data, { headers: httpOptions.headers });
  }

  putEducation(data: Education): Observable<Education> {
    return this.http.put<Education>(this.baseUrl, data, { headers: httpOptions.headers });
  }

  deleteEducation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
  }
}
