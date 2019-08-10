import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-self-practice',
  templateUrl: './ng-for-self-practice.component.html',
  styleUrls: ['./ng-for-self-practice.component.scss']
})
export class NgForSelfPracticeComponent implements OnInit {

  // ngForArray: any = [
  //   "{a: 1}",
  //   "{b: 2}",
  //   "{c: 3}",
  // ];

  ngForArr: any = [
    {a: 1},
    {a: 2},
    {a: 3},
  ];

    // danhSachLike: any = [
    //   {maPhim: 1, tenPhim: "Minions", soLike: 0},
    //   {maPhim: 2, tenPhim: "Home", soLike: 0},
    //   {maPhim: 3, tenPhim: "Harvie", soLike: 0},
    //   {maPhim: 4, tenPhim: "Insideout", soLike: 0},
    // ];

  constructor() { }

  ngOnInit() {
  }

}
