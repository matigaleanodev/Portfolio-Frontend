import { Component, OnInit } from '@angular/core';

import { DataForm } from 'src/app/models/dataForm.model';
import * as AOS from 'aos';
import { ExperienceService } from 'src/app/services/data-services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  workData!: DataForm[];
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
    this.expService.getWorks().subscribe((works: DataForm[]) => {
      this.workData = works.slice().reverse();
    });
  }

  onAdd(): boolean {
    return this.addWork = !this.addWork;
  }

  onSubmit(data: DataForm): void {
    this.expService.postWork(data).subscribe((res) => {
      console.log(res);
    });
    this.addWork = false;
  }

  onEdit(data: DataForm) {
    this.expService.putWork(data).subscribe((res) => {
      console.log(res);
    });
  }

  onDelete(id: number) {
    this.expService.deleteWork(id).subscribe((res) => {
      console.log(res);
    });
  }
}
