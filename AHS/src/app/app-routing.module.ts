import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { DietComponent } from './diet/diet.component';
import { HomeComponent } from './home/home.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './mainpage/appointment/appointment.component';
import { DashboardComponent } from './mainpage/dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PractionerDashboardComponent } from './mainpage/practioner-dashboard/practioner-dashboard.component';
import { ProfileComponent } from './mainpage/profile/profile.component';
import { Mainpage1Component } from './mainpage1/mainpage1.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MusicComponent } from './music/music.component';
import { PhysioComponent } from './physio/physio.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { YogaComponent } from './yoga/yoga.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'login', component: LoginComponent ,children:[
    {path:'login-doc',component:LoginDoctorComponent},
    {path:'login-pat',component:LoginPatientComponent},
    {path:'',component:LoginPatientComponent}
  ]},
// children:[
//   {path:'login',component:LoginDoctorComponent},
//   {path:'login',component:LoginPatientComponent},
// ]},

  { path: 'register', component: SignupComponent },
  {path:'doc-dashboard', component: PractionerDashboardComponent},
  
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'Profile', component: ProfileComponent },
      { path: 'Medicine', component: MedicineComponent },
      { path: 'Appointment', component: CalenderComponent },
      { path: 'Diagnosis', component: DiagnosisComponent },
    {path:'mainpage', component: MainpageComponent,}
  ]
  },
  {path:'mainpage', component:MainpageComponent},

  {path:'physio',component:PhysioComponent},
  {path:'music',component:MusicComponent},
  {path:'yoga',component:YogaComponent},
  {path:'diet',component:DietComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
