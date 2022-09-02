import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { staffingData } from '../../staffing.model';
import { StaffingFormPresenterService } from '../staffing-form-presenter/staffing-form-presenter.service';

@Component({
  selector: 'app-staffing-form-presentation',
  templateUrl: './staffing-form-presentation.component.html',
  styleUrls: ['./staffing-form-presentation.component.scss'],
  viewProviders: [StaffingFormPresenterService]
})
export class StaffingFormPresentationComponent implements OnInit {

  public registerForm!: FormGroup;
  public formtitle: string = 'Add Staff';
  submitted = false;

  @Input() public set editData(data: staffingData | null) {
    if (data) {
      this.registerForm.patchValue(data);
      this.formtitle = 'Edit User';
    }
  }

  @Output() public emitFormdata: EventEmitter<staffingData>;
  @Output() public emitUpdatedata: EventEmitter<staffingData>;
  @Output() public addUserData: EventEmitter<staffingData>;

  constructor(private staffingFormPresenterService: StaffingFormPresenterService, private route: Router) {
    this.registerForm = this.staffingFormPresenterService.buildForm()
    this.emitFormdata = new EventEmitter<staffingData>();
    this.emitUpdatedata = new EventEmitter<staffingData>();
    this.addUserData = new EventEmitter<staffingData>();

  }


  ngOnInit(): void {

    this.staffingFormPresenterService.addUser$.subscribe((res: any) => {
      if (res) {
        this.addUserData.emit(res);
      }
    })
    this.staffingFormPresenterService.getdata$.subscribe(data => {
      if (this.formtitle === 'Add Staff') {
        this.emitFormdata.emit(data)
      }
      else {
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
