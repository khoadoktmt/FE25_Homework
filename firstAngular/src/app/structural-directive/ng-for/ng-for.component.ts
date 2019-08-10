import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  danhSachNhanVien: any = [
    {ten: "Nguyen", tuoi: 18},
    {ten: "Huy", tuoi: 19},
    {ten: "Hao", tuoi: 20},
    {ten: "Hoa", tuoi: 21},
    {ten: "Hung", tuoi: 22},
  ];

  constructor() { }

  ngOnInit() {
  }

}
