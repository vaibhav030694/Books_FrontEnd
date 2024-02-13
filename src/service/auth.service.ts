import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }, this.httpOptions);
  }

  register(user: any) {
    return this.http.post<any>(`${this.apiUrl}/register`, user, this.httpOptions);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
