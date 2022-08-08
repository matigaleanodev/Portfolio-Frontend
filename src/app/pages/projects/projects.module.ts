import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectTitleComponent } from './components/project-title/project-title.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent, ProjectFormComponent, ProjectTitleComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
