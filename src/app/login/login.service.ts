import { Injectable } from '@angular/core';
import { AuthUser } from '../auth/auth-user';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';
import { SecondauthService } from '../auth/secondauth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
    private secondAuthService: SecondauthService,
    private guard: AuthGuard
  ) { }

  login(user: AuthUser): void {
    let isAuth: boolean = this.authService.authenticate(user);
    if (isAuth) {
      localStorage.setItem("token", "loggedin");
      this.guard.setActivated(true);
    }
  }

  logout(): void {
    localStorage.removeItem("token");
    this.secondAuthService.deactivateUser();
    this.guard.setActivated(false);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }
}
