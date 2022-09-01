import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { staffingData } from '../../staffing.model';
import { StaffingService } from '../../staffing.service';
import { StaffingFormPresenterService } from '../staffing-form-presenter/staffing-form-presenter.service';

@Component({
  selector: 'app-staffing-form-presentation',
  templateUrl: './staffing-form-presentation.component.html',
  styleUrls: ['./staffing-form-presentation.component.scss']
})
export class StaffingFormPresentationComponent implements OnInit {

  registerForm: FormGroup;
  public formtitle:string = 'Add Staff';
  submitted = false;

  @Input() public set editData(data:staffingData | null){
    if(data){
      this.registerForm.patchValue(data);
      this.formtitle = 'Edit User';
    }
  }
  
  @Output() public emitFormdata : EventEmitter<staffingData>;
  @Output() public emitUpdatedata : EventEmitter<staffingData>;

  constructor(private fb: FormBuilder, private service: StaffingFormPresenterService, private route: Router ) { 
     this.registerForm = this.fb.group({
      project: ['', Validators.required],
      leadName: ['', Validators.required],
      moduleLeadName: ['', Validators.required],
      developerName: ['', Validators.required],
      staffing:  ['', Validators.required],
      role: ['', Validators.required],
      frameworkTool: ['', Validators.required],
      cssFramework: ['', Validators.required],
      joiningDate: ['', Validators.required],
      releaseDate: ['', Validators.required],
      status: ['', Validators.required],
      billableNonbillable: ['', Validators.required],
      spendhours: ['', Validators.required],
      comments: ['', Validators.required],
    })

    this.emitFormdata = new EventEmitter<staffingData>();
    this.emitUpdatedata = new EventEmitter<staffingData>();

  }

  
  ngOnInit(): void {
    this.service.getdata$.subscribe(data => {
      if(this.formtitle === 'Add Staff'){
        this.emitFormdata.emit(data)
      }
      else{
        this.emitUpdatedata.emit(data)
      }
    })
  }

  onCancel(){
    this.route.navigateByUrl('/staffing/staffingList');
  }
  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  OnSubmit() {
    this.submitted = true;
    this.service.getFormdata(this.registerForm.value);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
