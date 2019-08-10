import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapBusComponent } from './bai-tap-bus.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';



@NgModule({
  declarations: [
    BaiTapBusComponent,
    ItemGheComponent,
    DanhSachGheComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    BaiTapBusComponent,
    ItemGheComponent,
    DanhSachGheComponent
  ],
})
export class BaiTapBusModule { }
