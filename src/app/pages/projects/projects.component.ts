import { Component, OnInit } from '@angular/core';

import { Project } from 'src/app/models/projects.interface';
import { projectsData } from './projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = projectsData

  constructor() { }

  ngOnInit(): void {
  }

}
