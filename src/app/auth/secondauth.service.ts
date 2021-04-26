import { Injectable } from '@angular/core';
import { AuthUser } from '../auth-user';
import { SecondAuthGuard } from './second-auth.guard';


@Injectable({
  providedIn: 'root'
})
export class SecondauthService {

  private loggedInUser: AuthUser;

  constructor(private guard: SecondAuthGuard) { }

  setLoggedUser(user: AuthUser): void {
    this.loggedInUser = user;
  }

  deactivateUser(): void {
    this.loggedInUser = null;
    this.guard.setActivated(false);
  }

  performSecondAuth(): void {
    if (this.loggedInUser != null) {
      this.guard.setActivated(true);
    }
  }
}
