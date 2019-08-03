import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Homework29072019Component } from '../homework29072019/homework29072019.component';

import { HeaderComponent } from './header/header.component';

import { BannerComponent } from './banner/banner.component';

import { BestSmartPhoneComponent } from './best-smart-phone/best-smart-phone.component';
import { SmartPhone01Component } from './best-smart-phone/smart-phone01/smart-phone01.component';
import { SmartPhone02Component } from './best-smart-phone/smart-phone02/smart-phone02.component';
import { SmartPhone03Component } from './best-smart-phone/smart-phone03/smart-phone03.component';
import { SmartPhone04Component } from './best-smart-phone/smart-phone04/smart-phone04.component';

import { BestSmartLaptopComponent } from './best-smart-laptop/best-smart-laptop.component';
import { Laptop01Component } from './best-smart-laptop/laptop01/laptop01.component';
import { Laptop02Component } from './best-smart-laptop/laptop02/laptop02.component';
import { Laptop03Component } from './best-smart-laptop/laptop03/laptop03.component';
import { Laptop04Component } from './best-smart-laptop/laptop04/laptop04.component';

import { ProductionComponent } from './production/production.component';
import { Production01Component } from './production/production01/production01.component';
import { Production02Component } from './production/production02/production02.component';
import { Production03Component } from './production/production03/production03.component';


@NgModule({
  declarations: [
    Homework29072019Component,
    HeaderComponent,
    BannerComponent,
    BestSmartPhoneComponent,
    BestSmartLaptopComponent,
    ProductionComponent,
    SmartPhone01Component,
    SmartPhone02Component,
    SmartPhone03Component,
    SmartPhone04Component,
    Laptop01Component,
    Laptop02Component,
    Laptop03Component,
    Laptop04Component,
    Production01Component,
    Production02Component,
    Production03Component
  ],

  imports: [
    CommonModule
  ],

  exports: [
    Homework29072019Component,

    // Still work when comment ??? why ??? assume: "export class" ???
    HeaderComponent,
    BannerComponent,
    BestSmartPhoneComponent,
    BestSmartLaptopComponent,
    ProductionComponent,
    SmartPhone01Component,
    SmartPhone02Component,
    SmartPhone03Component,
    SmartPhone04Component,
    Laptop01Component,
    Laptop02Component,
    Laptop03Component,
    Laptop04Component
  ],
})
export class Homework29072019Module { }
