import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/projects.interface';
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
export class ProjectsService {
  baseUrl = `${environment.API_URL}/api/project`;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl, { headers: httpOptions.headers });
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
  }

  postProject(data: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, data, { headers: httpOptions.headers });
  }

  putWork(data: Project): Observable<Project> {
    return this.http.put<Project>(this.baseUrl, data, { headers: httpOptions.headers });
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: httpOptions.headers });
  }
}
