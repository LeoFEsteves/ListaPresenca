import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendacePageRoutingModule } from './attendace-routing.module';

import { AttendacePage } from './attendace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendacePageRoutingModule
  ],
  declarations: [AttendacePage]
})
export class AttendacePageModule {}
