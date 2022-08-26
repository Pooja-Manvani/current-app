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

  
  public postdata(Data: staffingData):Observable<staffingData>{
    return this.http.post<staffingData>(`${this.api}/`, Data);
  }

  public getbyid(id:number):Observable<staffingData>{
    return this.http.get<staffingData>(`${this.api}/${id}`);
  }

  public updateData(id:number,data:staffingData):Observable<staffingData>{
    return this.http.put<staffingData>(`${this.api}/${id}`,data);
  }
  
  public deleteData(id:number):Observable<staffingData>{
    return this.http.delete<staffingData>(`${this.api}/${id}`);
  }
}
