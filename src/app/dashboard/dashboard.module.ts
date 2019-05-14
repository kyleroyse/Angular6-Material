import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CdkTableModule } from '@angular/cdk/table';
import { TableComponent } from '../uicomponents/table/table.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CdkTableModule
  ],
  declarations: [
    DashboardComponent,
    TableComponent
  ]
})
export class DashboardModule { }
