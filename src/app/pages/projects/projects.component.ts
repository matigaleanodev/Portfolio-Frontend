import { Component, OnInit } from '@angular/core';

import { Project } from 'src/app/models/projects.interface';
import { ProjectsService } from 'src/app/services/data-services/projects.service';
import { projectsData } from './projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = projectsData;

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.getData();
    this.projectService.Refreshrequired.subscribe(() => {
      this.getData();
      console.log(this.projects);
    });
  }

  getData(): void {
    this.projectService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  onEdit(id: number) {
    console.log(id);
  }

  onDelete(id: number) {
    for (let inx = 0; inx < this.projects.length; inx++) {
      if (this.projects[inx].id === id) {
        this.projects.splice(inx, 1);
      }
    }
  }
}
