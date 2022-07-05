import { Component, OnInit } from '@angular/core';

import { Education } from 'src/app/models/education.interface';
import { educationData } from './education.data';
import * as AOS from 'aos';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationData: Education[] = educationData;
  addEducation: boolean = false;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onAdd(): boolean {
    this.addEducation = !this.addEducation;
    return this.addEducation;
  }

  onEdit(id: number) {
    console.log(id);
  }

  onDelete(id: number) {
    for (let inx = 0; inx < this.educationData.length; inx++) {
      if (this.educationData[inx].id === id) {
        this.educationData.splice(inx, 1);
      }
    }
  }
}
