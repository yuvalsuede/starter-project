import {Inject, Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AppContext {

  accountsBl: any;

  constructor(
    // @Inject(APP_CONFIG) private config: AppConfig,
    //            private storage: StorageService,
               private route: ActivatedRoute,
               private router: Router) {
  }

  get AppName() {
    return 'Starter Project';
  }
}
