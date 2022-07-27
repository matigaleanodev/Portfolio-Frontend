import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from '../../models/works.interface';
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
export class ExperienceService {
  baseUrl = `${environment.API_URL}/api/work`;

  constructor(private http: HttpClient) {}

  getWorks(): Observable<Work[]> {
    return this.http.get<Work[]>(this.baseUrl, { headers: httpOptions.headers });    
  }

  getWorkById(id: number): Observable<Work> {
    return this.http.get<Work>(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
  }

  postWork(data: Work): Observable<Work> {
    return this.http.post<Work>(this.baseUrl, data, { headers: httpOptions.headers });
  }

  putWork(data: Work): Observable<Work> {
    return this.http.put<Work>(this.baseUrl, data, { headers: httpOptions.headers });
  }

  deleteWork(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
  }
}
