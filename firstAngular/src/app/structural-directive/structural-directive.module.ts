import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { BaitapNgForComponent } from './baitap-ng-for/baitap-ng-for.component';



@NgModule({
  declarations: [
    StructuralDirectiveComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    BaitapNgForComponent
  ],
  
  imports: [
    CommonModule
  ],

  exports: [
    StructuralDirectiveComponent,
    NgIfComponent
  ],
})
export class StructuralDirectiveModule { }
