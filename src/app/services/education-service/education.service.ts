import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl = 'http://localhost:8080/education'

  constructor(
    private http: HttpClient
  ) { }

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.baseUrl, httpOptions);
  }
  
  getEducationById(id: number): Observable<Education>{
    return this.http.get<Education>(`${this.baseUrl}/${id}`);
  }
  
  postEducation(data: Education): Observable<Education>{
    return this.http.post<Education>(this.baseUrl, data, httpOptions)
  }

  putEducation(data: Education): Observable<Education>{
    return this.http.put<Education>(this.baseUrl, data, httpOptions)
  }

  deleteEducation(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
