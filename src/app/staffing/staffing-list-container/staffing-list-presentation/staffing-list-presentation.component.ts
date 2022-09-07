import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DropdownService } from '../../dropdown.service';
import { StaffingfilterComponent } from '../../staffing-form-container/staffing-form-presentation/staffingfilter/staffingfilter.component';
import { staffingData } from '../../staffing.model';
import { StaffingService } from '../../staffing.service';

@Component({
  selector: 'app-staffing-list-presentation',
  templateUrl: './staffing-list-presentation.component.html',
  styleUrls: ['./staffing-list-presentation.component.scss']
})
export class StaffingListPresentationComponent implements OnInit {

staffingList = this.dropDownService.staffing
billList = this.dropDownService.bill
roleList = this.dropDownService.role
cssFrameWorkList = this.dropDownService.cssFramework
frameworkToolList = this.dropDownService.frameworkTool
statusList = this.dropDownService.status
  p: number = 1;
  public filterData: any;
  
  private _staffList!: staffingData[];
  notification: boolean | undefined;
  count: any;
  copyData: any;
  nodatafound: boolean | undefined;
  finalData: any;
  @Input() set staffList(value: staffingData[] | null ){
    if (value){
      this._staffList = value
      console.log(this._staffList);
    }
  }

  public get staffList(): staffingData[] {
    return this._staffList
  }
  
  @Output() public emitDeleteid: EventEmitter<number>;

  constructor(private staffService: StaffingService, private route: Router, private dropDownService:DropdownService, private overlay:Overlay) {
    this.emitDeleteid = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

  getTBodyScroll(e: any ) {
    const getHead:any = document.getElementById("thead");
    getHead.scrollLeft = e.target.scrollLeft
  }
  getTHeadScroll(e: any ) {
    const getBody:any = document.getElementById("tbody");
    getBody.scrollLeft = e.target.scrollLeft
  }

  onReset() {
    this.notification = false;
    window.location.reload();
  }

  popUp() {
    
  }

  onDelete(id: number) {
    this.emitDeleteid.emit(id);
  }

  onFilter(){
    const OverlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    })

    const component = new ComponentPortal(StaffingfilterComponent)
    const componentRef = OverlayRef.attach(component);

    OverlayRef.backdropClick().subscribe(() => {
      OverlayRef.detach();
    })

    componentRef.instance.emitCancel.subscribe(() => {
      OverlayRef.detach();
    })
    
    componentRef.instance.emitFilterData.subscribe((data) => {
      this.filterData = data;
      // this.filtering();
      // OverlayRef.detach();

      
      let Keys = Object.keys(this.filterData)

      Keys.forEach((items: any) => {
        if (this.filterData[items]) {
          this.count = true;
        }
      })

      if (this.count) {
        this.filtering();
        this.notification = true;
      } else {
        this.notification = false;
      }

      OverlayRef.detach();
    });

    if (this.filterData) {
      componentRef.instance.listdata = this.filterData;
    }
  }

  public filtering(){
    if (!this.copyData) {
      this.copyData = [...this._staffList]
    }

    let Keys = Object.keys(this.filterData);

    Keys.forEach((items: any) => {
      if (this.filterData[items]) {
        this.finalData = this.copyData.filter((data: any) => {
          return data[items] === this.filterData[items]
        })
      }
    });

    this._staffList = this.finalData;

    if (this.finalData.length === 0) {
      this.nodatafound = true;
    } else {
      this.nodatafound = false;
    }
  }
  
}
