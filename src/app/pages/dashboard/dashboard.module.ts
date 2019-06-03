import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard.component';
import {AppSharedModule} from '../../common/app-shared.module';
import {DashboardBl} from './dashboard.bl';

@NgModule({
  imports: [
    AppSharedModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    DashboardBl
  ],
})
export class DashboardModule {
}
