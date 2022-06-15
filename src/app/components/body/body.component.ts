import { Component, Input } from '@angular/core';

import { trigger, transition, useAnimation }  from  "@angular/animations";
import { scaleDownFromBottom }  from  "ngx-router-animations";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('animation',  [ transition('* => *', useAnimation(scaleDownFromBottom))])
  ]
})
export class BodyComponent {

  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;

  constructor() { }
  getState(outlet: any )  {
		return outlet.activatedRouteData.animation;
	}
  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    } else if(!this.collapsed && this.screenWidth <= 768){
      styleClass = 'body-expanded';
    } else {
      styleClass = 'body-expanded';
    }
    return styleClass;
  }


}