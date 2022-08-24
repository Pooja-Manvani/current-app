import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffingFormContainerComponent } from './staffing-form-container/staffing-form-container.component';
import { StaffingListContainerComponent } from './staffing-list-container/staffing-list-container.component';
import { StaffingComponent } from './staffing.component';

const routes: Routes = 
[
  {
    path: '', redirectTo: 'staffingList', pathMatch: 'full'
  },
  { path: 'staffingList', component: StaffingListContainerComponent },
  { path: 'staffingForm', component: StaffingFormContainerComponent },
  { path: 'edit/:id', component: StaffingFormContainerComponent }


]

// [{ path: '', component: StaffingComponent,
// children: [
//   { path:'', redirectTo: 'staffingList', pathMatch: 'full' },
//   { path: 'staffingForm', component: StaffingFormContainerComponent},
//   { path: 'staffingList', component: StaffingListContainerComponent},
//   { path: 'edit/:id', component: StaffingFormContainerComponent}
// ]
// }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffingRoutingModule { }
