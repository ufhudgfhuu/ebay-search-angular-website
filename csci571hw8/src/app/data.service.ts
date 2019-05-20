import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Data} from './Data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private announceClick = new BehaviorSubject<Data>(null);
  announceClick$ = this.announceClick.asObservable();

  private readItemObj = new BehaviorSubject<any>(null);
  readItemObj$ = this.readItemObj.asObservable();

  getClickEvent(data) {
    // alert('I am in service');
    this.announceClick.next(data);
  }

  getItemObj(data) {
    //alert('I am in service');
    this.readItemObj.next(data);
  }
}
