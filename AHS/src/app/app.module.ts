import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Mainpage1Component } from './mainpage1/mainpage1.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './mainpage/dashboard/dashboard.component';


import { ProfileComponent } from './mainpage/profile/profile.component';
import { AppointmentComponent } from './mainpage/appointment/appointment.component';
import {Routes ,RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { MedicineComponent } from './medicine/medicine.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PractionerDashboardComponent } from './mainpage/practioner-dashboard/practioner-dashboard.component';
import { Appointment1Component } from './appointment1/appointment1.component';

import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';

import { PhysioComponent } from './physio/physio.component';
import { MusicComponent } from './music/music.component';
import { YogaComponent } from './yoga/yoga.component';
import { DietComponent } from './diet/diet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalenderComponent } from './calender/calender.component';




import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';




const appRoutes: Routes =[
{path :'', component: DashboardComponent},
{path :'profile', component: ProfileComponent},
{path :'Appointment', component: AppointmentComponent},
{path :'medicine' , component: MedicineComponent},
{path :'diagnosis', component: DiagnosisComponent}

];
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    Mainpage1Component,
    LoginComponent,
    DashboardComponent,

    FooterComponent,

    ProfileComponent,
    AppointmentComponent,
    FooterComponent,
    RegisterComponent,
    MedicineComponent,
    DiagnosisComponent,
    SignupComponent,
    HomeComponent,
    PractionerDashboardComponent,
    Appointment1Component,

    LoginPatientComponent,
    LoginDoctorComponent,
  

    PhysioComponent,
    MusicComponent,
    YogaComponent,
    DietComponent,
    CalenderComponent
    
    
    


    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FullCalendarModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
