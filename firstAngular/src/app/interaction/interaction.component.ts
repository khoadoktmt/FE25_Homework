import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  // DOM
  @ViewChild(DanhSachPhimComponent, {static:false}) tagDanhSachPhim: DanhSachPhimComponent;

  constructor() { }

  ngOnInit() {
  }

  addMovie(_maPhim, _tenPhim, _giaPhim, _anhPhim) {
    const newfilm = {
      maPhim: _maPhim,
      tenPhim: _tenPhim,
      giaPhim: _giaPhim,
      anhPhim: _anhPhim      
    }
    this.tagDanhSachPhim.themphim(newfilm);
  }
}
