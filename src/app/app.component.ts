import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <large-header-component></large-header-component>
    <mat-sidenav-container class="app-container">
      <mat-sidenav #sidenav mode="side"
                   [(opened)]="opened">
        <app-sidenav-menu></app-sidenav-menu>
      </mat-sidenav>
      <mat-sidenav-content>
        <div class="page-wrapper">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
    
  `,
  styles: [`
    :host {
      display: flex;
    }
    .page-wrapper {
      width: 100%;
      max-width: 1200px;
    }
    .app-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #eee;
      padding-top: 125px;
    }
    mat-sidenav {
      padding-top: 125px;
      width: 280px; 
    }
    mat-sidenav-content {
      padding: 30px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
  `]
})
export class AppComponent {
  title = 'sps app';
  opened = true;

  constructor() {

  }
}
