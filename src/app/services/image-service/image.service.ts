import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  baseUrl = 'http://localhost:8080/image';

  constructor(private http: HttpClient) { }


  getImage(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  postImage(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data, httpOptions);
  }

  deleteImage(name: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`);
  }
}
