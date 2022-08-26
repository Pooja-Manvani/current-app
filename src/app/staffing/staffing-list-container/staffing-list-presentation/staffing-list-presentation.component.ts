import { Component, Input, OnInit } from '@angular/core';
import { staffingData } from '../../staffing.model';
import { StaffingService } from '../../staffing.service';

@Component({
  selector: 'app-staffing-list-presentation',
  templateUrl: './staffing-list-presentation.component.html',
  styleUrls: ['./staffing-list-presentation.component.scss']
})
export class StaffingListPresentationComponent implements OnInit {
  
  p: number = 1;
  private _staffList!: staffingData[];
  @Input() set staffList(value: staffingData[] | null ){
    if (value){
      this._staffList = value
      console.log(this._staffList);
    }
  }

  public get staffList(): staffingData[] {
    return this._staffList
  }
  
  constructor(private staffService: StaffingService) {
   }

  ngOnInit(): void {
  }

  getTBodyScroll(e: any ) {
    console.log(e.target.scrollLeft);
    const getHead:any = document.getElementById("thead");
    getHead.scrollLeft = e.target.scrollLeft
  }
  getTHeadScroll(e: any ) {
    console.log(e.target.scrollLeft);
    const getBody:any = document.getElementById("tbody");
    getBody.scrollLeft = e.target.scrollLeft
  }

  onReset() {
    window.location.reload();
  }

}
