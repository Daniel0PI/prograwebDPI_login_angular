import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/users'; // URL de la API

  constructor(private http: HttpClient) { }

  getDatos(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  postDatos(datos: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, datos);
  }
}