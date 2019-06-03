import {Component, OnInit} from '@angular/core';
import {AppContext} from '../../app-context.service';

@Component({
  selector: 'app-dashboard-component',
  template: `
    <app-page-title [title]="AppName"></app-page-title>
  `,
  styles: [`

 `]
})

export class DashboardComponent implements OnInit {

  breakpointCols;

  constructor(private app: AppContext
              ) {
  }

  ngOnInit() {
    this.calcBreakpoint();
  }

  onResize(event) {
    this.calcBreakpoint();
  }

  calcBreakpoint() {
    this.breakpointCols = (window.innerWidth <= 800) ? 1 : 3;
  }

  get AppName() {
    return this.app.AppName;
  }


}


