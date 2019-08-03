import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBakeHeaderComponent } from './my-bake-header/my-bake-header.component';



@NgModule({
  declarations: [MyBakeHeaderComponent],
  
  imports: [
    CommonModule
  ],

  exports: [
    MyBakeHeaderComponent
  ]
})
export class MyBakeModule { }
