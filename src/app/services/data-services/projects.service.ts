import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Project } from 'src/app/models/projects.interface';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  baseUrl = `${environment.API_URL}/api/project`;

  constructor(private http: HttpClient) {}
  
  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  postProject(data: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  putProject(data: Project): Observable<Project> {
    return this.http.put<Project>(this.baseUrl, data)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
    .pipe(tap(() => this.Refreshrequired.next()));;
  }
}
