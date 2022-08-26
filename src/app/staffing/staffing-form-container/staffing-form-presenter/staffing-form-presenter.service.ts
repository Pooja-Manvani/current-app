import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { staffingData } from '../../staffing.model';

@Injectable({
  providedIn: 'root'
})
export class StaffingFormPresenterService {
  
  private getdata:Subject<staffingData>;
  public getdata$:Observable<staffingData>;

  constructor() {
    this.getdata = new Subject<staffingData> ();
    this.getdata$ = this.getdata.asObservable ();
   }


   public getFormdata(data: staffingData){
    this.getdata.next(data);
   }

  }
