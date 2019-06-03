import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule
} from '@angular/material';
import {BidiModule} from '@angular/cdk/bidi';
import {MatProgressButtonsModule} from 'mat-progress-buttons';
const importExportArray = [

  //  material
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  BidiModule,
  MatProgressButtonsModule,
  MatGridListModule,
  MatCardModule,
];

@NgModule({
  imports: [
    ...importExportArray,
  ],
  exports: [
    ...importExportArray,

  ],
  declarations: [

  ],
  providers: [

  ],
})
export class MaterialSharedModule {
}
