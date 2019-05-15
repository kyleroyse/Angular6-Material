import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CdkTableModule } from '@angular/cdk/table';
import { TableComponent } from '../uicomponents/table/table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CdkTableModule,
    MatTableModule
  ],
  declarations: [
    DashboardComponent,
    TableComponent
  ]
})
export class DashboardModule { }
