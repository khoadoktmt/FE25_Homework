import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Homework29072019Component } from '../homework29072019/homework29072019.component';

import { HeaderComponent } from './header/header.component';

import { BannerComponent } from './banner/banner.component';

import { BestSmartPhoneComponent } from './products/best-smart-phone/best-smart-phone.component';
import { SmartPhoneComponent } from './products/best-smart-phone/smart-phone/smart-phone.component';

import { BestSmartLaptopComponent } from './products/best-smart-laptop/best-smart-laptop.component';
import { LaptopComponent } from './products/best-smart-laptop/laptop/laptop.component';

import { ProductionComponent } from './production/production.component';
import { SubProductionComponent } from './production/sub-production/sub-production.component';

import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    Homework29072019Component,
    HeaderComponent,
    BannerComponent,
    BestSmartPhoneComponent,
    BestSmartLaptopComponent,
    ProductionComponent,

    SmartPhoneComponent,
    
    LaptopComponent,
    
    SubProductionComponent,

    ProductsComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    Homework29072019Component,

    // Still work when comment ??? why ??? assume: "export class" ???
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    BestSmartPhoneComponent,
    SmartPhoneComponent,
    BestSmartLaptopComponent,
    LaptopComponent,
    ProductionComponent,
    SubProductionComponent,
  ],
})
export class Homework29072019Module { }
