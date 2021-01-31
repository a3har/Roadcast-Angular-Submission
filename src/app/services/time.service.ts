import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {


  public currentDateTime = new Subject<Date>();
  constructor(){

  setInterval(() => {
    this.currentDateTime.next(new Date());
  }, 1);
  }
}
