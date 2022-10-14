import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { EducationService } from 'src/app/services/data-services/education.service';
import { DataForm } from 'src/app/models/dataForm.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationData: DataForm[] = [];
  addEducation: boolean = false;

  constructor(private eduService: EducationService) {}

  ngOnInit(): void {
    this.getData();
    this.eduService.Refreshrequired.subscribe(() => {
      this.getData();
    });
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  getData(): void {
    this.eduService.getEducation().subscribe((data: DataForm[]) => {
      this.educationData = data.slice().reverse();
    });
  }

  onAdd(): boolean {
    this.addEducation = !this.addEducation;
    return this.addEducation;
  }

  onSubmit(data: DataForm): void {
    this.eduService.postEducation(data).subscribe((res) => {
      console.log(res);
    });
    this.addEducation = false;
  }

  onEdit(data: DataForm) {
    this.eduService.putEducation(data).subscribe((res) => {
      console.log(res);
    });
  }

  onDelete(id: number) {
    this.eduService.deleteEducation(id).subscribe((res) => {
      console.log(res);
    });
  }
}
