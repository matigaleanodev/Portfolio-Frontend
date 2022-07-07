import { Component, OnInit } from '@angular/core';

import { Work } from 'src/app/models/works.interface';
import * as AOS from 'aos';
import { ExperienceService } from 'src/app/services/experience-service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

  workData!: Work[];
  addWork: boolean = false;

  constructor(private expService: ExperienceService) {    
  }

  ngOnInit(): void {
    this.expService.getWorks().subscribe(works => {
      this.workData = works;
    }
    );
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onAdd(): boolean {
    this.addWork = !this.addWork;
    return this.addWork;
  }

  onSubmit(work: Work): void {
    // this.expService.postWork(work).subscribe();
    // this.addWork = false;
  }

  onEdit(id: number) {
    // this.expService.getWorkById(id).subscribe(work => {
    //   this.expService.putWork(work).subscribe();
    // }
    // );
  }

  onDelete(id: number) {
    // this.expService.deleteWork(id).subscribe();
  }
}
