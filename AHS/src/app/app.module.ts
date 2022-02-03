import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Mainpage1Component } from './mainpage1/mainpage1.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './mainpage/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    Mainpage1Component,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
