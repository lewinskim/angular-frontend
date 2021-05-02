import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthUser } from '../auth-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser: AuthUser = new AuthUser("", "");

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginService.login(this.loggedUser);
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  logout(): void {
    this.loginService.logout();
  }

}
