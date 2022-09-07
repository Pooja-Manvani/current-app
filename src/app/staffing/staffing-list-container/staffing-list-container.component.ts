import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DropdownService } from '../dropdown.service';
import { staffingData } from '../staffing.model';
import { StaffingService } from '../staffing.service';
@Component({
  selector: 'app-staffing-list-container',
  templateUrl: './staffing-list-container.component.html'
})
export class StaffingListContainerComponent implements OnInit {

  @HostBinding('class') classes = 'd-flex h-100';

  StaffingFormData$: Observable<staffingData[]>
  nodatafound: boolean;

  constructor(private staffService:StaffingService) { 
    this.StaffingFormData$ = new Observable();
    this.nodatafound = false;
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
