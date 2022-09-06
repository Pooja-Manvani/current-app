import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { staffingData } from '../../staffing.model';

@Injectable({
  providedIn: 'root'
})
export class StaffingFormPresenterService {
  public getdata$: Observable<staffingData>;
  private getdata: Subject<staffingData>;


  constructor(private fb: FormBuilder) {
    this.getdata = new Subject<staffingData>();
    this.getdata$ = this.getdata.asObservable();

  }

  public buildForm() {
    return this.fb.group({
      project: ['', Validators.required],
      leadName: ['', [Validators.required]],
      moduleLeadName: ['', Validators.required],
      developerName: ['', Validators.required],
      staffing: ['', Validators.required],
      role: ['', Validators.required],
      frameworkTool: ['', Validators.required],
      cssFramework: ['', Validators.required],
      joiningDate: ['', Validators.required],
      releaseDate: ['', Validators.required],
      status: ['', Validators.required],
      bill: ['', Validators.required],
      spendHours: ['', Validators.required],
      comments: ['', Validators.required],
    })
  }

  public onSubmit(registerForm: any) {
    // stop here if form is invalid
    if (registerForm.valid) {
      this.getdata.next(registerForm.value)
    }
    else {
      return;
    }
  }

  public getFormdata(data: staffingData) {
    this.getdata.next(data);
  }

}
