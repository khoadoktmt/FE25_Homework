import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { BaitapbindingComponent } from './baitapbinding/baitapbinding.component';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { NgIfSelfPracticeComponent } from './ng-if-self-practice/ng-if-self-practice.component';
import { NgForSelfPracticeComponent } from './ng-for-self-practice/ng-for-self-practice.component';
import { NgClassSelfPracticeComponent } from './ng-class-self-practice/ng-class-self-practice.component';
import { NgSwitchSelfPracticeComponent } from './ng-switch-self-practice/ng-switch-self-practice.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
    BaitapbindingComponent,

    InterpolationComponent,
    PropertyComponent,
    EventComponent,
    NgIfSelfPracticeComponent,
    NgForSelfPracticeComponent,
    NgClassSelfPracticeComponent,
    NgSwitchSelfPracticeComponent,
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    DataBindingComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,

    InterpolationComponent,
    PropertyComponent,
    EventComponent,
    
    NgIfSelfPracticeComponent,
    NgForSelfPracticeComponent,
    NgClassSelfPracticeComponent,
    NgSwitchSelfPracticeComponent,
  ]
})
export class DataBindingModule { }
