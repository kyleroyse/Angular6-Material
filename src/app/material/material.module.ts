import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
         MatToolbarModule,
         MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
            CommonModule,
            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatCardModule,
            MatTabsModule,
            MatIconModule,
            MatSidenavModule,
            MatTableModule,
            MatFormFieldModule,
            MatAutocompleteModule,
            MatMenuModule
          ],
  exports: [
            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatCardModule,
            MatTabsModule,
            MatIconModule,
            MatSidenavModule,
            MatTableModule,
            MatFormFieldModule,
            MatAutocompleteModule,
            MatMenuModule
          ],
          schemas: [
            CUSTOM_ELEMENTS_SCHEMA,
          ],
})
export class MaterialModule { }
