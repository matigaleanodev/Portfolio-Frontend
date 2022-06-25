import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CollapsePanelComponent } from 'src/app/components/collapse-panel/collapse-panel.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProfileComponent } from '../../components/profile/profile.component';



@NgModule({
  declarations: [
    AboutComponent,
    CollapsePanelComponent,
    TimelineComponent,
    SkillsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NgbModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
