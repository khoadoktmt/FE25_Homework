import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';


@NgModule({
  declarations: [
    InteractionComponent,
    ItemPhimComponent,
    DanhSachPhimComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    InteractionComponent,
    ItemPhimComponent,
    DanhSachPhimComponent
  ]
})
export class InteractionModule { }
