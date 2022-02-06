import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Mainpage1Component } from './mainpage1/mainpage1.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './mainpage/dashboard/dashboard.component';
import { ProfileComponent } from './mainpage/profile/profile.component';
import { AppointmentComponent } from './mainpage/appointment/appointment.component';
import {Routes ,RouterModule} from '@angular/router';
const appRoutes: Routes =[
{path :'', component: DashboardComponent},
{path :'profile', component: ProfileComponent},
{path :'Appointment', component: AppointmentComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    Mainpage1Component,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    AppointmentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
