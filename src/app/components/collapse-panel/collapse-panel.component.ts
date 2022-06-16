import { Component, Input } from '@angular/core';
import { CollapsePanelAnimation } from 'src/app/animations/collapse-panel.animation';


@Component({
  selector: 'app-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.scss'],
  animations:[CollapsePanelAnimation]
})
export class CollapsePanelComponent {

  @Input() headerText:string = '';
  @Input() collapsed:boolean = false;

  animating:boolean = false;
  transitionOptions:string = '400ms cubic-bezier(0.86, 0, 0.07, 1)';

  constructor() { }

  toggle(event: any){
    if(this.animating) return;
    this.animating = true;
    if(this.collapsed){
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }
    event.preventDefault();    
  }

  onToggleDone(){
    this.animating = false;

  }

}
