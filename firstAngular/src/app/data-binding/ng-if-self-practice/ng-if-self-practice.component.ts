import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-self-practice',
  templateUrl: './ng-if-self-practice.component.html',
  styleUrls: ['./ng-if-self-practice.component.scss']
})
export class NgIfSelfPracticeComponent implements OnInit {

  usrname: string = 'zxc';
  login: boolean = true;
  checkLogin: boolean = false;
  status: boolean = false;

  constructor() { }

  ngOnInit() { }

  Show() {
    this.login = !this.login;
  }

  Hide() {
    this.login = false;
  }

  Login(username) {
    this.status = (username.value === this.usrname)
                  ? true
                  : false;
    this.checkLogin = !this.status;
  }

  Logout() {
    this.status = false;
  }
}
