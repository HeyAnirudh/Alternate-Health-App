import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainscreenComponent,
    AfterloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
