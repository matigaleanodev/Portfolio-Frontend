import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  baseUrl = `${environment.API_URL}/api/image`;

  constructor(private http: HttpClient) { }

  getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  getImage(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  postImage(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  deleteImage(name: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`);
  }
}
