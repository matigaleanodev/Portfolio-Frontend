import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CollapsePanelModule } from 'src/app/components/collapse-panel/collapse-panel.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    CollapsePanelModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
