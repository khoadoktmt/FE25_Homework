import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { BaitapbindingComponent } from './baitapbinding/baitapbinding.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
    BaitapbindingComponent,
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    DataBindingComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
  ]
})
export class DataBindingModule { }
