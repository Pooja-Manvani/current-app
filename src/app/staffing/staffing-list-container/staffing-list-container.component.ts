import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { staffingData } from '../staffing.model';
import { StaffingService } from '../staffing.service';
@Component({
  selector: 'app-staffing-list-container',
  templateUrl: './staffing-list-container.component.html'
})
export class StaffingListContainerComponent implements OnInit {

  @HostBinding('class') classes = 'd-flex h-100';

  StaffingFormData$: Observable<staffingData[]>

  constructor(private staffService:StaffingService) { 
    this.StaffingFormData$ = new Observable();
  }

  ngOnInit(): void {
  this.StaffingFormData$ = this.staffService.getdata();
  }

  public  emitDeleteid(id:number) {
    this.staffService.deleteData(id).subscribe(() => {
      alert("Data Deleted");
      this.StaffingFormData$ = this.staffService.getdata();
    })
  }
}
