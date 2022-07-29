import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education.interface';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';


@Injectable({
  providedIn: 'root',
})
export class EducationService {
  baseUrl = `${environment.API_URL}/api/education`;

  constructor(private http: HttpClient) {}

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.baseUrl, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  getEducationById(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.baseUrl}/${id}`, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  postEducation(data: Education): Observable<Education> {
    return this.http.post<Education>(this.baseUrl, data);
  }

  putEducation(data: Education): Observable<Education> {
    return this.http.put<Education>(this.baseUrl, data);
  }

  deleteEducation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
