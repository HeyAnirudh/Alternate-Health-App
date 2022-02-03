import { Component, OnInit } from '@angular/core';
declare function colorLink(): void;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    colorLink();
   }

  ngOnInit(): void {
  }

}

