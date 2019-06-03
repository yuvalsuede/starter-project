import {NgModule} from '@angular/core';

import {SidenavMenuComponent} from './sidenav-menu.component';
import {AppSharedModule} from '../../app-shared.module';
import {SidenavMenuBl} from './sidenav-menu.bl';

@NgModule({
  imports: [
    AppSharedModule
  ],
  exports: [
    SidenavMenuComponent
  ],
  declarations: [
    SidenavMenuComponent
  ],
  providers: [
    SidenavMenuBl
  ],
})
export class SidenavMenuModule {
}
