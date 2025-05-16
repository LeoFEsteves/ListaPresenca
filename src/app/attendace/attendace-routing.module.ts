import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendacePage } from './attendace.page';

const routes: Routes = [
  {
    path: '',
    component: AttendacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendacePageRoutingModule {}
