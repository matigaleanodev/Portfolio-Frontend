import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  baseUrl = `${environment.API_URL}/api/image`;

  constructor(private http: HttpClient) { }


  getImage(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`, { headers: httpOptions.headers });
  }

  postImage(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data, { headers: httpOptions.headers });
  }

  deleteImage(name: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`);
  }
}
