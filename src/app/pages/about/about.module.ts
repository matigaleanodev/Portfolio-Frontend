import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CollapsePanelModule } from 'src/app/components/collapse-panel/collapse-panel.module';
import { WorksComponent } from '../../components/works/works.component';
import { EducationComponent } from '../../components/education/education.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    AboutComponent,
    WorksComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    CollapsePanelModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
