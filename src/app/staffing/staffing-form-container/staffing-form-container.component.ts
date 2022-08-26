import { Component, OnInit } from '@angular/core';
import { staffingData } from '../staffing.model';
import { StaffingService } from '../staffing.service';

@Component({
  selector: 'app-staffing-form-container',
  templateUrl: './staffing-form-container.component.html',
  styleUrls: ['./staffing-form-container.component.scss']
})
export class StaffingFormContainerComponent implements OnInit {

  constructor(private staffService:StaffingService) { }

  ngOnInit(): void {
  }

  public formdata(Data: staffingData){
    this.staffService.postdata(Data).subscribe(() => {
      alert("Data added");
      // this.route.navigateByUrl('/employee/list');
    })
  }

}
