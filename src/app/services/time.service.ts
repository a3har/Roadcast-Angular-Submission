import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  public currentDateTime: Date = new Date();
  constructor(){
  setInterval(() => {
            this.currentDateTime = new Date();
          }, 1);
  }
}
