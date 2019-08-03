import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import { Baitap1Component } from './baitap1/baitap1.component';
// import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
// import { Baitap1ContentComponent } from './baitap1/baitap1-content/baitap1-content.component';
// import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
// import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';

import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2HeaderComponent } from './baitap2/baitap2-header/baitap2-header.component';
import { Baitap2CarouselComponent } from './baitap2/baitap2-carousel/baitap2-carousel.component';
import { Baitap2WhatWeDoComponent } from './baitap2/baitap2-what-we-do/baitap2-what-we-do.component';
import { Baitap2ContactUsComponent } from './baitap2/baitap2-contact-us/baitap2-contact-us.component';
import { Baitap2ListCardComponent } from './baitap2/baitap2-list-card/baitap2-list-card.component';
import { Baitap2ItemcardComponent } from './baitap2/baitap2-list-card/baitap2-itemcard/baitap2-itemcard.component';
import { Baitap2FooterComponent } from './baitap2/baitap2-footer/baitap2-footer.component';

import { Baitap3Module } from './baitap3/baitap3.module';

import { MyBakeModule } from './my-bake/my-bake.module';
import { MyBakeComponent } from './my-bake/my-bake.component';

import { DataBindingModule } from './data-binding/data-binding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';

import { Homework29072019Module } from './homework29072019/homework29072019.module';

@NgModule({
  declarations: [
    AppComponent,

    // Baitap1Component,
    // Baitap1HeaderComponent,
    // Baitap1ContentComponent,
    // Baitap1SidebarComponent,
    // Baitap1FooterComponent,

    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2CarouselComponent,
    Baitap2WhatWeDoComponent,
    Baitap2ContactUsComponent,
    Baitap2ListCardComponent,
    Baitap2ItemcardComponent,
    Baitap2FooterComponent,

    MyBakeComponent,

  ],
  imports: [
    BrowserModule,

    Baitap3Module,

    DataBindingModule,

    StructuralDirectiveModule,

    Homework29072019Module,

    MyBakeModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
