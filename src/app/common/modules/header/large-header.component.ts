import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'large-header-component',
  template: `
    <div class="large-header">
      <div class="app-inner-container" fxLayout="row" fxLayoutAlign="center">
        <div fxFlex.gt-sm="800px" fxFlex.lt-md="100">
          <app-header></app-header>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      width: 100%;
      z-index: 10;
    }

    .large-header {
      width: 100%;
      height: auto;
      padding: 45px 0;
      background-image: -webkit-linear-gradient(152deg, #2ebfc6 0, #2da6ad 67%);
      background-image: -ms-linear-gradient(152deg, #2ebfc6 0, #2da6ad 67%);
      position: relative;
      overflow: visible;
    }
  `]
})

export class LargeHeaderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
