import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
