import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { staffingData } from './staffing.model';

@Injectable({
  providedIn: 'root'
})
export class StaffingService {

  api: string = 'http://localhost:3000/staffingData'
  constructor(private http: HttpClient) { }

  public getdata():Observable<staffingData[]>{
    return this.http.get<staffingData[]>(`${this.api}`);
  }
}
