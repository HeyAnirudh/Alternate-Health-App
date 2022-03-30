import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileuploder',
  templateUrl: './fileuploder.component.html',
  styleUrls: ['./fileuploder.component.css']
})
export class FileuploderComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url:"https://slack.com/api/files.upload"
    }
};

  constructor() { }

  ngOnInit(): void {
  }

}
