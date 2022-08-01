import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Project } from 'src/app/models/projects.interface';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() data!: Project;
  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
  onLogin: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(res => {
      this.onLogin = res;
      console.log(res);
    }
    );
  }


  ngOnInit(): void {}
}
