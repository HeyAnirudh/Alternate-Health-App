import { Component, OnInit } from '@angular/core';
import patientData from 'db.json';
interface Patient {
  gender:string;
  age:Number;
  height:number;
  weight:number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void { }

  patient:Patient[]=patientData;

}