import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Project } from 'src/app/models/projects.interface';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { environment } from 'src/environments/environment';
import * as AOS from 'aos';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() data!: Project;
  @Output() onEdit = new EventEmitter<Project>();
  @Output() onDelete = new EventEmitter<number>();
  API_URL = environment.API_URL;
  onLogin: boolean = false;
  editMode: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(res => {
      this.onLogin = res;
    }
    );
  }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onEditMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmit(data: Project): void {
    if (data !== undefined) {
      data.id = this.data.id;
      data.image === undefined || 'undefined'
        ? (data.image = this.data.image)
        : data.image;
      this.onEdit.emit(data);
      this.editMode = false;
    } else {
      this.editMode = false;
    }
  }
}
