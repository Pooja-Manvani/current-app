import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { StaffingRoutingModule } from './staffing-routing.module';
import { StaffingComponent } from './staffing.component';
import { StaffingFormContainerComponent } from './staffing-form-container/staffing-form-container.component';
import { StaffingListContainerComponent } from './staffing-list-container/staffing-list-container.component';
import { StaffingFormPresentationComponent } from './staffing-form-container/staffing-form-presentation/staffing-form-presentation.component';
import { StaffingListPresentationComponent } from './staffing-list-container/staffing-list-presentation/staffing-list-presentation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownPipe } from './drop-down.pipe';
import { StaffingfilterComponent } from './staffing-form-container/staffing-form-presentation/staffingfilter/staffingfilter.component';



@NgModule({
  declarations: [
    StaffingComponent,
    StaffingFormContainerComponent,
    StaffingListContainerComponent,
    StaffingFormPresentationComponent,
    StaffingListPresentationComponent,
    DropDownPipe,
    StaffingfilterComponent
  ],
  imports: [
    CommonModule,
    StaffingRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    OverlayModule,
  ]
})
export class StaffingModule { }
