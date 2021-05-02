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

  isAuthenticated: boolean = false;
  loggedUser: AuthUser = new AuthUser("", "");

  constructor(
    private service: AuthService,
    private secondAuthSrvc: SecondauthService,
    private guard: AuthGuard
  ) { }

  ngOnInit(): void {
    // const stubuser: AuthUser = new AuthUser("Ad", "aaa");
    // this.isAuthenticated = this.service.authenticate(stubuser);
  }

  onSubmit(): void {
    let isAuth: boolean = this.service.authenticate(this.loggedUser);
    if (isAuth) {
      this.login();
      this.isAuthenticated = isAuth;
      this.guard.setActivated(isAuth);
      this.secondAuthSrvc.setLoggedUser(this.loggedUser);
    }
  }

  login(): void {
    localStorage.setItem("token", "loggedin");
  }

  isLoggedIn(): boolean {
    console.log("token");
    console.log(localStorage.getItem("token"));
    let check : boolean = "loggedin" == localStorage.getItem("token");
    console.log(check);
    return check;
  }

  logout(): void {
    localStorage.removeItem("token");
    this.isAuthenticated = false;
    this.guard.setActivated(false);
    this.secondAuthSrvc.deactivateUser();
  }

}
