import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: 'staffing', pathMatch: 'full' },
  { path: 'staffing', loadChildren: () => import('./staffing/staffing.module').then(m => m.StaffingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
