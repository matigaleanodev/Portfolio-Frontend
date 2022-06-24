import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';


import { CollapsePanelComponent } from 'src/app/components/collapse-panel/collapse-panel.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { SkillsComponent } from '../../components/skills/skills.component';



@NgModule({
  declarations: [
    AboutComponent,
    CollapsePanelComponent,
    TimelineComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
