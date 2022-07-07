import { Component, OnInit } from '@angular/core';

import { Education } from 'src/app/models/education.interface';
import * as AOS from 'aos';
import { EducationService } from 'src/app/services/education-service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationData!: Education[];
  addEducation: boolean = false;

  constructor(private eduService: EducationService) {}

  ngOnInit(): void {
    this.eduService.getEducation().subscribe((data) => {
      this.educationData = data;
    });
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onAdd(): boolean {
    this.addEducation = !this.addEducation;
    return this.addEducation;
  }

  onEdit(id: number) {
    this.eduService.getEducationById(id).subscribe(data => {
      this.eduService.putEducation(data).subscribe((data)=>{
        this.educationData.push(data);
      });
    }
    );
  }

  onDelete(id: number) {
    this.eduService.deleteEducation(id).subscribe(() => {
      this.educationData = this.educationData.filter((data) => data.id !== id);
    });
  }
}
