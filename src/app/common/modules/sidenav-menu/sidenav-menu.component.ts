import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav-menu',
  template: `
    <div class="sidenav-row pad-right" >
      <mat-icon>home_outline</mat-icon>Dashboard
    </div>
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <mat-icon>person_outline</mat-icon>Accounts
        </mat-panel-title>
        <mat-panel-description>
        </mat-panel-description>
      </mat-expansion-panel-header>
    </mat-expansion-panel>
  `,
  styles: [`
    .profile_image {
      display: block;
      position: relative;
      border-radius: 50%;
      width: 55px;
      height: 55px;
      background: #8B9EA7;
      max-width: 55px;
    }
    mat-expansion-panel {
      box-shadow: none !important;
      border-bottom: 1px solid #efefef;
    }
    .sidenav-row{
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: inherit;
      font-family: Roboto,"Helvetica Neue",sans-serif;
      font-size: 15px;
      font-weight: 400;
      height: 80px;
      cursor: pointer;
      border-bottom: 1px solid #efefef;
    }
    .sidenav-row-inner img {
      margin-right: 10px;
    }
    .sidenav-row:hover {
      background: rgba(0,0,0,.04);
    }
    .pad-right {
      padding: 0 24px;
    }

    mat-icon {
      color: #9023c9;
      margin-right: 10px;
    }
 `]
})
export class SidenavMenuComponent implements OnInit {

  constructor(private router: Router) { // we will use router to navigate from sidenav
  }


  ngOnInit() {
  }



}
