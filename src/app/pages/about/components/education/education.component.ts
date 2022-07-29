import { Component, OnInit } from '@angular/core';

import { Education } from 'src/app/models/education.interface';
import * as AOS from 'aos';
import { EducationService } from 'src/app/services/data-services/education.service';

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
    this.eduService.getEducation().subscribe((data: Education[]) => {
      this.educationData = data.slice().reverse();
    });
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onAdd(): boolean {
    this.addEducation = !this.addEducation;
    return this.addEducation;
  }

  onSubmit(data: Education): void {
    this.eduService.postEducation(data).subscribe(
      (res: any) => {
        console.log(res);
        this.educationData.push(data);
      });
      this.addEducation = false;
  }

  onEdit(id: number) {
    this.eduService.getEducationById(id).subscribe((data) => {
      (res: any) => console.log(res);
      this.eduService.putEducation(data).subscribe((data) => {
        (res: any) => console.log(res);
        this.educationData.push(data);
      });
    });
  }

  onDelete(id: number) {
    this.eduService.deleteEducation(id).subscribe(() => {
      (res: any) => console.log(res);
      this.educationData = this.educationData.filter((data) => data.id !== id);
    });
  }
}
