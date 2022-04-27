import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { HomeComponent } from './home/home.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './mainpage/appointment/appointment.component';
import { DashboardComponent } from './mainpage/dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProfileComponent } from './mainpage/profile/profile.component';
import { Mainpage1Component } from './mainpage1/mainpage1.component';
import { MedicineComponent } from './medicine/medicine.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'login', component: LoginComponent ,children:[
    {path:'login-doc',component:LoginDoctorComponent},
    {path:'login-pat',component:LoginPatientComponent}
  ]},
// children:[
//   {path:'login',component:LoginDoctorComponent},
//   {path:'login',component:LoginPatientComponent},
// ]},

  { path: 'register', component: SignupComponent },
  
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'Profile', component: ProfileComponent },
      { path: 'Medicine', component: MedicineComponent },
      { path: 'Appointment', component: AppointmentComponent },
      { path: 'Diagnosis', component: DiagnosisComponent },




    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
