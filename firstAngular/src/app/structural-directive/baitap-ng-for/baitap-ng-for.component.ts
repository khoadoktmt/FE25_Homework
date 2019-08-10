import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ng-for',
  templateUrl: './baitap-ng-for.component.html',
  styleUrls: ['./baitap-ng-for.component.scss']
})
export class BaitapNgForComponent implements OnInit {
  sanPham: any = [];

  ThemSanPham(ma, ten, gia) {
    // console.log(ma);
    // console.log(ten);
    // console.log(gia);

    const obj_SP = {
      "Ma_SP": ma,
      "Ten_SP": ten,
      "Gia": gia
    };
    
    this.sanPham.push(obj_SP);
    console.log(this.sanPham);
  }

  constructor() { }

  ngOnInit() {
  }

}
