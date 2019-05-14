// Modules
import { MaterialModule } from '../app/material/material.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app-routing.module';
import {LayoutModule} from './layout/layout.module';
import {PreloadAllModules, RouterModule} from '@angular/router';
// import { LayoutRoutingModule } from './layout/layout-routing.module';
import { CdkTableModule } from '@angular/cdk/table';


// Components
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { AccountSettingsComponent } from './account-settings/account-settings.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { UsersComponent } from './users/users.component';
//import { TableComponent } from './uicomponents/table/table.component';


import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    //TableComponent,
    // LoginComponent,
    // AccountSettingsComponent,
    // DashboardComponent,
    // RegistrationComponent,
    // UsersComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
        // RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
    LayoutModule,
    // LayoutRoutingModule,
    CdkTableModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
