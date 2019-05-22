import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { UsersTableComponent } from '../uicomponents/users-table/users-table.component';

import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    CdkTableModule
  ],
  declarations: [
    UsersComponent,
    UsersTableComponent
  ]
})
export class UsersModule { }
