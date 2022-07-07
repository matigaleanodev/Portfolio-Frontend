import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from '../../models/works.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  baseUrl = 'http://localhost:8080/work'

  constructor(
    private http: HttpClient
  ) { }
  
  getWorks(): Observable<Work[]> {
    return this.http.get<Work[]>(this.baseUrl, httpOptions);
  }
  
  getWorkById(id: number): Observable<Work>{
    return this.http.get<Work>(`${this.baseUrl}/${id}`);
  }
  
  postWork(data: Work): Observable<Work>{
    return this.http.post<Work>(this.baseUrl, data, httpOptions)
  }

  putWork(data: Work): Observable<Work>{
    return this.http.put<Work>(this.baseUrl, data, httpOptions)
  }

  deleteWork(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
