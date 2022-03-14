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
<<<<<<< Updated upstream
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { MedicineComponent } from './medicine/medicine.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
=======
import { PractionerDashboardComponent } from './mainpage/practioner-dashboard/practioner-dashboard.component';
>>>>>>> Stashed changes
=======
>>>>>>> parent of 09e1ffc (backend)
const appRoutes: Routes =[
{path :'', component: DashboardComponent},
{path :'profile', component: ProfileComponent},
{path :'Appointment', component: AppointmentComponent},
{path :'medicine' , component: MedicineComponent},
{path :'diagnosis', component: DiagnosisComponent}

];


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
<<<<<<< Updated upstream
    FooterComponent,
    RegisterComponent,
    MedicineComponent,
    DiagnosisComponent,
<<<<<<< HEAD
    SignupComponent,
    HomeComponent,
=======
    PractionerDashboardComponent,
>>>>>>> Stashed changes
=======
>>>>>>> parent of 09e1ffc (backend)
    

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
