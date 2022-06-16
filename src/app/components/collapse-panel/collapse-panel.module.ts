import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsePanelComponent } from './collapse-panel.component';
import { CollapseHeaderComponent } from './collapse-header.component';
import { CollapseContentComponent } from './collapse-content.component';



@NgModule({
  declarations: [
    CollapsePanelComponent,
    CollapseHeaderComponent,
    CollapseContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollapsePanelComponent,
    CollapseHeaderComponent,
    CollapseContentComponent
  ]
})
export class CollapsePanelModule { }
