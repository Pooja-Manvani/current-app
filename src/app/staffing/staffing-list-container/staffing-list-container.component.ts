import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { staffingData } from '../staffing.model';
import { StaffingService } from '../staffing.service';
@Component({
  selector: 'app-staffing-list-container',
  templateUrl: './staffing-list-container.component.html'
})
export class StaffingListContainerComponent implements OnInit {

  StaffingFormData$: Observable<staffingData[]>

  constructor(private staffService:StaffingService) { 
    this.StaffingFormData$ = new Observable();
  }

  ngOnInit(): void {
  this.StaffingFormData$ = this.staffService.getdata();
  }

}
