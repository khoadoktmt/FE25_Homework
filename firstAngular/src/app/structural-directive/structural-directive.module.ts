import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgIfComponent } from './ng-if/ng-if.component';



@NgModule({
  declarations: [
    StructuralDirectiveComponent,
    NgIfComponent
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
