import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './mainpage/appointment/appointment.component';
import { DashboardComponent } from './mainpage/dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProfileComponent } from './mainpage/profile/profile.component';
import { Mainpage1Component } from './mainpage1/mainpage1.component';
import { MedicineComponent } from './medicine/medicine.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',redirectTo:'mainpage', pathMatch:'full'
  },
  {
    path:'mainpage', component:MainpageComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
