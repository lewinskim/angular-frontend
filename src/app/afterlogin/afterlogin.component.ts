import { Component, OnInit } from '@angular/core';
import { SecondauthService } from '../auth/secondauth.service';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {


  constructor(private secondauth: SecondauthService) { }

  ngOnInit(): void {
  }

  secondAuth(): void{
    this.secondauth.performSecondAuth();
  }

}
