import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HardSkill } from 'src/app/models/skill.interface';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class HardSkillService {
  baseUrl = `${environment.API_URL}/api/hard-skills`;

  constructor(private http: HttpClient) {}
  
  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getHardSkills(): Observable<HardSkill[]> {
    return this.http.get<HardSkill[]>(this.baseUrl, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  getHardSkillById(id: number): Observable<HardSkill> {
    return this.http.get<HardSkill>(`${this.baseUrl}/${id}`, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  postHardSkill(data: HardSkill): Observable<HardSkill> {
    return this.http.post<HardSkill>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putHardSkill(data: HardSkill): Observable<HardSkill> {
    return this.http.put<HardSkill>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  deleteHardSkill(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }
}
