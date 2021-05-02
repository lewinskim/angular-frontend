import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthUser } from '../auth/auth-user';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
    private guard: AuthGuard,
    private router: Router
  ) { }

  login(user: AuthUser): void {
    let isAuth: boolean = this.authService.authenticate(user);
    if (isAuth) {
      localStorage.setItem("token", "loggedin");
      this.guard.setActivated(true);
      this.router.navigate(['/afterlogin']);
    }
  }

  logout(): void {
    localStorage.removeItem("token");
    this.guard.setActivated(false);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }
}
