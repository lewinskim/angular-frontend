import { Injectable } from '@angular/core';
import { AuthUser } from '../auth/auth-user';
import { SecondAuthGuard } from './second-auth.guard';


@Injectable({
  providedIn: 'root'
})
export class SecondauthService {


  constructor(private guard: SecondAuthGuard) { }

  deactivateUser(): void {
    this.guard.setActivated(false);
  }

  performSecondAuth(): void {
    if (localStorage.getItem("token") != null) {
      this.guard.setActivated(true);
    }
  }
}
