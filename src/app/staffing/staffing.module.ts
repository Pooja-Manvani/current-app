import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffingRoutingModule } from './staffing-routing.module';
import { StaffingComponent } from './staffing.component';
import { StaffingFormContainerComponent } from './staffing-form-container/staffing-form-container.component';
import { StaffingListContainerComponent } from './staffing-list-container/staffing-list-container.component';
import { StaffingFormPresentationComponent } from './staffing-form-container/staffing-form-presentation/staffing-form-presentation.component';
import { StaffingListPresentationComponent } from './staffing-list-container/staffing-list-presentation/staffing-list-presentation.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    StaffingComponent,
    StaffingFormContainerComponent,
    StaffingListContainerComponent,
    StaffingFormPresentationComponent,
    StaffingListPresentationComponent
  ],
  imports: [
    CommonModule,
    StaffingRoutingModule,
    NgxPaginationModule

  ]
})
export class StaffingModule { }
