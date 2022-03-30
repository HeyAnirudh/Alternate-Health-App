import { Component, OnInit } from '@angular/core';
import patientData from 'db.json';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}
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
  
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;
    fruits: Fruit[] = [{name: 'Heartburn'}, {name: 'Fever'}, {name: 'Cold'},{name:'Stomach pain'}];
  
    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
  
      // Add our fruit
      if (value) {
        this.fruits.push({name: value});
      }
  
      // Clear the input value
      event.chipInput!.clear();
    }
  
    remove(fruit: Fruit): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }
  }

  


  



 

