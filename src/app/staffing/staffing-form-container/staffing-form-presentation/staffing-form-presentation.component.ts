import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DropdownService } from '../../dropdown.service';
import { staffingData } from '../../staffing.model';
import { StaffingFormPresenterService } from '../staffing-form-presenter/staffing-form-presenter.service';

@Component({
  selector: 'app-staffing-form-presentation',
  templateUrl: './staffing-form-presentation.component.html',
  styleUrls: ['./staffing-form-presentation.component.scss'],
  viewProviders: [StaffingFormPresenterService]
})
export class StaffingFormPresentationComponent implements OnInit {
  @Input() public set editData(data: staffingData | null) {
    if (data) {
      this.registerForm.patchValue(data);
      this.formtitle = 'Edit User';
    }
  }
  @Output() public emitFormdata: EventEmitter<staffingData>;
  @Output() public emitUpdatedata: EventEmitter<staffingData>;
  @Output() public addUserData: EventEmitter<staffingData>;

  public registerForm!: FormGroup;
  public formtitle: string = 'Add Staff';
  submitted = false;

  constructor(private staffingFormPresenterService: StaffingFormPresenterService, private route: Router,private dropdownService: DropdownService ) {
    this.registerForm = this.staffingFormPresenterService.buildForm()
    this.emitFormdata = new EventEmitter<staffingData>();
    this.emitUpdatedata = new EventEmitter<staffingData>();
    this.addUserData = new EventEmitter<staffingData>();

  }
staffingList = this.dropdownService.staffing
billList = this.dropdownService.bill
roleList = this.dropdownService.role
cssFrameWorkList = this.dropdownService.cssFramework
frameworkToolList = this.dropdownService.frameworkTool
statusList = this.dropdownService.status

  ngOnInit(): void {

    this.staffingFormPresenterService.getdata$.subscribe(data => {
      if (this.formtitle === 'Add Staff') {
        this.addUserData.emit(data)
      }
      else if('Edit User') {
        this.emitUpdatedata.emit(data)
      }
    })
  }

  onCancel() {
    this.route.navigateByUrl('/staffing/staffingList');
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  OnSubmit() {
    this.submitted = true;
      this.staffingFormPresenterService.onSubmit(this.registerForm);
    

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
