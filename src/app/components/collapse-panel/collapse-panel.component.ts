import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CollapsePanelAnimation } from 'src/app/animations/collapse-panel.animation';
import { Education } from 'src/app/models/education.interface';
import { Work } from 'src/app/models/works.interface';


@Component({
  selector: 'app-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.scss'],
  animations:[CollapsePanelAnimation]
})
export class CollapsePanelComponent {
  
  @Input() collapsed:boolean = false;
  @Input() data!:Work|Education;
  @Output() Edit = new EventEmitter<number>();
  @Output() Delete = new EventEmitter<number>();

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

  onEdit(event: any){
    event.preventDefault();
    this.Edit.emit(this.data.id);
  }

  onDelete(event: any){
    event.preventDefault();
    this.Delete.emit(this.data.id);
  }

}
