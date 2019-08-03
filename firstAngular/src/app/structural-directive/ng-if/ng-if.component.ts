import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  myname:string = "Me";
  status:boolean = false;
  statusLogin:boolean = true;

  usrstatusLogin:boolean = false;
  username:string = "asd";
  passwd:string = "asd";

  show() {
    this.status = true;
  }

  hidden() {
    this.status = false;
  }

  Login() {
    this.statusLogin = true; 
  }

  Logout() {
    this.statusLogin = false;
  }

  UsrLogin(param_name, param_pass) {
    // console.log(param_name);
    // console.log(param_pass);

    if(param_name === this.username && param_pass === this.passwd) {
      this.usrstatusLogin = true;
      // console.log(this.usrstatusLogin);
      localStorage.setItem(this.username, JSON.stringify(this.username));
    }
  }

  UsrLogout() {
    this.statusLogin = false;
  }

  constructor() { }

  ngOnInit() {
    // store localStorage 
    // if(localStoragestringify
  }

}
