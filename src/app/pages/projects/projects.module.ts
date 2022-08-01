import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent, ProjectFormComponent],
  imports: [CommonModule, ProjectsRoutingModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
