import { Component, OnInit } from '@angular/core';

import { Project } from 'src/app/models/projects.interface';
import { ProjectsService } from 'src/app/services/data-services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  addProject: boolean = false;

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

  onAdd(): boolean {
    return (this.addProject = !this.addProject);
  }

  onSubmit(data: Project): void {
    this.projectService.postProject(data).subscribe((res) => {
      console.log(res);
    });
    this.addProject = false;
  }

  onEdit(data: Project) {
    this.projectService.putProject(data).subscribe((res) => {
      console.log(res);
    });
  }

  onDelete(id: number) {
    this.projectService.deleteProject(id).subscribe((res) => {
      console.log(res);
    });
  }
}
