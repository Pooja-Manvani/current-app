import { Overlay } from '@angular/cdk/overlay';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-staffingfilter',
  templateUrl: './staffingfilter.component.html',
  styleUrls: ['./staffingfilter.component.scss']
})
export class StaffingfilterComponent implements OnInit {
  public emitCancel:EventEmitter<boolean>;
  public emitFilterData:EventEmitter<any>;
  Filterformgroup: FormGroup;
  listdata: any;
  constructor(private overlay: Overlay, private fb: FormBuilder) {
    this.emitCancel = new EventEmitter();

    this.Filterformgroup = this.fb.group(
      {
        projectName:[''],
        leadName:[''],
        developerName:['']
      })

    this.emitFilterData = new EventEmitter();

    }

  ngOnInit(): void {
    if(this.listdata){
      this.Filterformgroup.patchValue(this.listdata);
    }
  }

  public onCancel(){
    this.emitCancel.emit();
  }

  public onFilterData(){
    this.emitFilterData.emit(this.Filterformgroup.value)
  }
}
