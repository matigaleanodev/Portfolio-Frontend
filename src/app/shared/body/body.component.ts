import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { trigger, transition, useAnimation } from '@angular/animations';
import {
  fromBottomEasing,
  fromLeftEasing,
  fromRightEasing,
  fromTopEasing,
} from 'ngx-router-animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('animation', [
      transition(
        '* => home',
        useAnimation(fromTopEasing, { params: { timing: 0.5 } })
      ),
      transition('* => *', useAnimation(fromRightEasing)),
    ]),
  ],
})
export class BodyComponent {
  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;

  constructor(private router: Router) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    } else if (!this.collapsed && this.screenWidth <= 768) {
      styleClass = 'body-expanded';
    } else {
      styleClass = 'body-expanded';
    }
    return styleClass;
  }
}
