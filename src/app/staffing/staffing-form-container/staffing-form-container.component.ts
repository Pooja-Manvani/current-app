import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { staffingData } from '../staffing.model';
import { StaffingService } from '../staffing.service';

@Component({
  selector: 'app-staffing-form-container',
  templateUrl: './staffing-form-container.component.html',
  styleUrls: ['./staffing-form-container.component.scss']
})
export class StaffingFormContainerComponent implements OnInit {

  public getByidData$:Observable<staffingData>;
  public getid:number;

  constructor(private staffService:StaffingService, private active:ActivatedRoute, private route:Router) { 
    this.getid = this.active.snapshot.params['id'];
    this.getByidData$ = new Observable();
  }

  ngOnInit(): void {
    this.getByidData$ = this.staffService.getbyid(this.getid)
  }

  public formdata(Data: staffingData){
    this.staffService.postdata(Data).subscribe(() => {
      alert("Data added");
      this.route.navigateByUrl('/staffing/staffingList');
    })
  }

  public emitUpdateData(data: staffingData){
    this.staffService.updateData(this.getid,data).subscribe(() => {
      alert("Data Updated");
      this.route.navigateByUrl('/staffing/staffingList');
    })
  }

}
