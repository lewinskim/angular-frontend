import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthUser } from '../auth-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticated: boolean = false;
  loggedUser: AuthUser = new AuthUser("", "");

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    // const stubuser: AuthUser = new AuthUser("Ad", "aaa");
    // this.isAuthenticated = this.service.authenticate(stubuser);
  }

  onSubmit(): void {
    this.isAuthenticated = this.service.authenticate(this.loggedUser);
  }

  logout(): void {
    this.isAuthenticated = false;
  }

}
