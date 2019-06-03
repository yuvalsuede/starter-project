import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './common/modules/header/header.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSidenavModule
} from '@angular/material';
import {SidenavMenuModule} from './common/modules/sidenav-menu/sidenav-menu.module';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressButtonsModule} from 'mat-progress-buttons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    MatProgressButtonsModule.forRoot(),

    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HeaderModule,

    // pages
    DashboardModule,
    SidenavMenuModule,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [

  ]
})
export class AppModule { }
