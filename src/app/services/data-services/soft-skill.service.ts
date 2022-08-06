import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { SoftSkill } from 'src/app/models/skill.interface';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillService {
  baseUrl = `${environment.API_URL}/api/softskill`;

  constructor(private http: HttpClient) {}

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

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
    return this.http
      .post<SoftSkill>(this.baseUrl, data)
      .pipe(tap(() => this.Refreshrequired.next()));
  }

  putSoftSkill(data: SoftSkill): Observable<SoftSkill> {
    return this.http
      .put<SoftSkill>(this.baseUrl, data)
      .pipe(tap(() => this.Refreshrequired.next()));
  }

  deleteSoftSkill(id: number): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/${id}`)
      .pipe(tap(() => this.Refreshrequired.next()));
  }
}
