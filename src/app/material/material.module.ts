import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
         MatToolbarModule,
         MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
            CommonModule,
            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatCardModule,
            MatTabsModule,
            MatIconModule
          ],
  exports: [
            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatCardModule,
            MatTabsModule,
            MatIconModule
          ]
})
export class MaterialModule { }
