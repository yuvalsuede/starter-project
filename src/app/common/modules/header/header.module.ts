import {NgModule} from '@angular/core';

import {HeaderComponent} from './header.component';
import {LargeHeaderComponent} from './large-header.component';
import {AppSharedModule} from '../../app-shared.module';
import {HeaderBlService} from './header.bl';

@NgModule({
  imports: [
    AppSharedModule,
  ],
  exports: [
    HeaderComponent,
    LargeHeaderComponent
  ],
  declarations: [
    HeaderComponent,
    LargeHeaderComponent
  ],
  providers: [
    HeaderBlService
  ],
})
export class HeaderModule {

}
