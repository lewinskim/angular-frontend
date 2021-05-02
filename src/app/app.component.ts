import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { SecondauthService } from './auth/secondauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private loginService: LoginService, private secondAuth: SecondauthService) { };

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  logout(): void {
    //TODO: refactor to maste auth service so that services will not have to know about each other
    this.loginService.logout();
    this.secondAuth.deactivateUser();
  }

  canShowConfidential(): boolean {
    return this.loginService.isLoggedIn() == true && this.secondAuth.isAuth();
  }

}
