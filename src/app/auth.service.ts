import { Injectable } from '@angular/core';
import { AuthUser } from './auth/auth-user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(user: AuthUser): boolean {
    let bo: boolean;
    for (var i = 0; i < USERS.length; i++) {
      if (USERS[i].username == user.username
         && USERS[i].password == user.password
      ) {
        bo = true;
      }
    }
    return bo == true ? true : false ;
  }
}
