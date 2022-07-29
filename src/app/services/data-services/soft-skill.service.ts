import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from 'src/app/models/skill.interface';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillService {
  baseUrl = `${environment.API_URL}/api/soft-skills`;

  constructor(private http: HttpClient) {}

  getSoftSkills(): Observable<SoftSkill[]> {
    return this.http.get<SoftSkill[]>(this.baseUrl, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  getSoftSkillById(id: number): Observable<SoftSkill> {
    return this.http.get<SoftSkill>(`${this.baseUrl}/${id}`, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  postSoftSkill(data: SoftSkill): Observable<SoftSkill> {
    return this.http.post<SoftSkill>(this.baseUrl, data);
  }

  putSoftSkill(data: SoftSkill): Observable<SoftSkill> {
    return this.http.put<SoftSkill>(this.baseUrl, data);
  }

  deleteSoftSkill(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
