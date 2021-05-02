import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SecondauthService } from '../auth/secondauth.service';
import { AuthUser } from '../auth-user';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser: AuthUser = new AuthUser("", "");

  constructor(
    private service: AuthService,
    private secondAuthSrvc: SecondauthService,
    private guard: AuthGuard
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let isAuth: boolean = this.service.authenticate(this.loggedUser);
    if (isAuth) {
      this.login();
    }
  }

  login(): void {
    localStorage.setItem("token", "loggedin");
    this.guard.setActivated(true);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }

  logout(): void {
    localStorage.removeItem("token");
    this.guard.setActivated(false);
    this.secondAuthSrvc.deactivateUser();
  }

}
