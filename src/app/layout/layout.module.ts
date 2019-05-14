import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoginComponent } from '../login/login.component';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; // <-- NgModel lives here
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ 
                  FooterComponent,
                  FooterOnlyLayoutComponent,
                  HeaderComponent, 
                  MainLayoutComponent, 
                  SidebarComponent,
                  LoginComponent
                ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
})
export class LayoutModule { }
