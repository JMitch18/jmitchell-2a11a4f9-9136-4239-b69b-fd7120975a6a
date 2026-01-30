import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly token = signal<string | null>(localStorage.getItem('access_token'));

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<{ accessToken: string }>('/api/auth/login', { email, password })
      .subscribe(({ accessToken }) => {
        localStorage.setItem('access_token', accessToken);
        this.token.set(accessToken);
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.token.set(null);
  }
}
