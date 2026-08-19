import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly AUTH_KEY = 'app_logged_in';

  isLoggedIn(): boolean {
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }

  login(): void {
    localStorage.setItem(this.AUTH_KEY, 'true');
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
  }
}
