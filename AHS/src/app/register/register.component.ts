import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group({
    name:[''],
    email:[''],
    password:[''],
    age:[''],
    height:[''],
    weight:[''],
    })

  }

}
