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
  public staffing=[
    {
      staffingId:1,
      staffingName:'official'
    },
    {
      staffingId:2,
      staffingName:'shadow'
    }
  ]

  public role=[
    {
      roleId:1,
      roleName:'UI'
    },
    {
      roleId:2,
      roleName:'Frontend'
    },
    {
      roleId:1,
      roleName:'Mean'
    },
  ]

  public frameworkTool=[
    {
      frameworkToolId:1,
      frameworkToolName:'React'
    },
    {
      frameworkToolId:2,
      frameworkToolName:'Angular'
    },
    {
      frameworkToolId:3,
      frameworkToolName:'vue'
    }
  ]

  public status=[
    {
      statusId:1,
      statusName:'Hold'
    },
    {
      statusId:2,
      statusName:'In progress'
    },
    {
      statusId:3,
      statusName:'Yet to start'
    },
    {
      statusId:1,
      statusName:'Closed'
    },
  ]

  public cssFramework=[
    {
      cssFrameworkId:1,
      cssFrameworkName:'Bootstrap'
    },
    {
      cssFrameworkId:1,
      cssFrameworkName:'Tailwind'
    },
  ]
  public bill=[
    {
      billId:1,
      billName:'Billable'
    },
    {
      billId:1,
      billName:'Non-Billable'
    }
  ]

  

 


 

  constructor(private staffingFormPresenterService: StaffingFormPresenterService, private route: Router) {
    this.registerForm = this.staffingFormPresenterService.buildForm()
    this.emitFormdata = new EventEmitter<staffingData>();
    this.emitUpdatedata = new EventEmitter<staffingData>();
    this.addUserData = new EventEmitter<staffingData>();

  }


  ngOnInit(): void {

    // this.staffingFormPresenterService.addUser$.subscribe((res: any) => {
    //   if (res) {
    //     this.addUserData.emit(res);
    //   }
    // })
    this.staffingFormPresenterService.getdata$.subscribe(data => {
      if (this.formtitle === 'Add Staff') {
        this.addUserData.emit(data)
      }
      else if('Edit User') {
        debugger
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
    debugger
    this.submitted = true;
      this.staffingFormPresenterService.onSubmit(this.registerForm);
    

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
