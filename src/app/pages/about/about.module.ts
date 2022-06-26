import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ProfileComponent } from '../../components/profile/profile.component';
import { HardSkillsComponent } from 'src/app/components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from '../../components/soft-skills/soft-skills.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { AboutTitlesComponent } from './about-titles.component';



@NgModule({
  declarations: [
    AboutComponent,
    ProfileComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    TimelineComponent,
    AboutTitlesComponent,
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
