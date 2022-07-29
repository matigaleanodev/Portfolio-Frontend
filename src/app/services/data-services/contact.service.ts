import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.interface';
import { environment } from 'src/environments/environment';
import { BYPASS_JW_TOKEN } from '../authentication/interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl = `${environment.API_URL}/contact`;

  constructor(private http: HttpClient) { }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  postContact(data: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, data, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
  }
}
