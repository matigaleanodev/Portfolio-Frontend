import { Component, OnInit } from '@angular/core';

import { Work } from 'src/app/models/works.interface';
import * as AOS from 'aos';
import { ExperienceService } from 'src/app/services/data-services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  workData!: Work[];
  addWork: boolean = false;

  constructor(private expService: ExperienceService) {}

  ngOnInit(): void {
    this.getData();
    this.expService.Refreshrequired.subscribe(() => {
      this.getData();
    });
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  getData(): void {
    this.expService.getWorks().subscribe((works: Work[]) => {
      this.workData = works;
    });
  }

  onAdd(): boolean {
    this.addWork = !this.addWork;
    return this.addWork;
  }

  onSubmit(data: Work): void {
    this.expService.postWork(data).subscribe((res) => {
      console.log(res);
    });
    this.addWork = false;
  }

  onEdit(id: number) {
    this.expService.getWorkById(id).subscribe((res) => {
      console.log(res);
    });
  }

  onDelete(id: number) {
    this.expService.deleteWork(id).subscribe((res) => {
      console.log(res);
    });
  }
}
