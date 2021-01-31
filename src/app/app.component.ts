import { Time } from '@angular/common';
import { Component } from '@angular/core';
import {TimeService} from './services/time.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  dateTime:Date = new Date();

  constructor(private t:TimeService){
      this.t.currentDateTime.subscribe(value=> {
        this.dateTime = value;
      });
  }
}
