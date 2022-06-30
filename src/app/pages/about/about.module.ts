import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProfileComponent } from './components/profile/profile.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AboutTitlesComponent } from './components/about-titles/about-titles.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { DataFormComponent } from './components/data-form/data-form.component';



@NgModule({
  declarations: [
    AboutComponent,
    ProfileComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    TimelineComponent,
    AboutTitlesComponent,
    ExperienceComponent,
    EducationComponent,
    DataCardComponent,
    DataFormComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
