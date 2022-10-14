import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataForm } from 'src/app/models/dataForm.model';
import { environment } from 'src/environments/environment';

import * as AOS from 'aos';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss'],
})
export class DataCardComponent implements OnInit {
  @Input() data = new DataForm();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<DataForm>();
  API_URL = environment.API_URL;
  onLogin: boolean = false;
  editMode: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe((res) => {
      this.onLogin = res;
    });
  }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onEditMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmit(data: DataForm): void {
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
