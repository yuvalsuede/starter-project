import {Component, OnInit} from '@angular/core';
import {IMenuItem} from '../../interfaces/menu.interface';
import {HeaderBlService} from './header.bl';



@Component({
  selector: 'app-header',
  template: `
    <div fxLayout="row" fxLayoutAlign="start center">
      <div class="menu-left">
        <div class="logo">MyLogo</div>
        <a fxHide.lt-md
          *ngFor="let item of menuLeftItems"
           class="menu-item"
           mat-button routerLink="item.link">{{ item.title }}
        </a>
      </div>
    </div>
  `,
  styles: [`
    :host {
      z-index: 10;
    }
    .menu-item {
      color: white;
    }
    .menu-right {
      margin-left: auto;
    }
    .menu-left {
      position: absolute;
      z-index: 10;
      display: flex;
      align-items: center;
    }
    .logo {
      font-family: 'Montserrat', sans-serif;
      color: white;
      font-size: 32px;
    }
 `]
})

export class HeaderComponent implements OnInit {
  menuLeftItems: IMenuItem[] = [
    {
      title: 'home',
      link: 'dashboard'
    },
  ];

  constructor(private headerBl: HeaderBlService) {
  }

  ngOnInit() {
  }

}
