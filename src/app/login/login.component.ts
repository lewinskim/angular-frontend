import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
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

  constructor(private service: AuthService, private guard: AuthGuard) { }

  ngOnInit(): void {
    // const stubuser: AuthUser = new AuthUser("Ad", "aaa");
    // this.isAuthenticated = this.service.authenticate(stubuser);
  }

  onSubmit(): void {
    let isAuth : boolean = this.service.authenticate(this.loggedUser);
    this.isAuthenticated = isAuth;
    this.guard.setActivated(isAuth);
  }

  logout(): void {
    this.isAuthenticated = false;
    this.guard.setActivated(false);
  }

}
