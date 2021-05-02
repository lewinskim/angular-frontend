import { Injectable } from '@angular/core';
import { AuthUser } from '../auth/auth-user';
import { SecondAuthGuard } from './second-auth.guard';
import { LoginService } from '../login/login.service';


@Injectable({
  providedIn: 'root'
})
export class SecondauthService {

  constructor(private guard: SecondAuthGuard, private loginSrvc : LoginService) { }

  deactivateUser(): void {
    this.guard.setActivated(false);
    localStorage.removeItem("confidential");
  }

  performSecondAuth(): void {
    if (this.loginSrvc.isLoggedIn()) {
      this.guard.setActivated(true);
      localStorage.setItem("confidential", "true");
    }
  }

  isAuth(): boolean {
    return localStorage.getItem("confidential") != null;
  }
}
