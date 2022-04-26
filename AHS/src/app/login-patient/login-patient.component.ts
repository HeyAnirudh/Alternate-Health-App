import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,  private _http:HttpClient,private router:Router ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login()
  {
    let a:any;
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user =res.find((_a: any)=>{
        return a.email===this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
         alert("Login successful");
             this.loginForm.reset()
            this.router.navigate(['dashboard'])
           }
           else{
             alert("Error in login");
           }
          
    
    }, err=>{
      alert("error in login");
    }
    )
  }
// login(){
// this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
// const user = res.find((a))=>{
//     return a.email===this.loginForm.value.email && a.password === this.loginForm.value.password}
//   })

//   if(user){
//     alert("Login successful");
//     this.loginForm.reset()
//     this.router.navigate(['dashboard'])
//   }
//   else{
//     alert("Error in login")
//   }
  
//   })

// }

}
