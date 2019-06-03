import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-title',
  template: `
    <div class="page-title">{{ title }}</div>
  `,
  styles: [`
    .page-title {
      text-shadow: 0 1px 3px rgba(0, 120, 255, 0.1);
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 500;
      margin: 10px 0;
      color: #3178ff;
    }
 `]
})

export class AppPageTitleComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
