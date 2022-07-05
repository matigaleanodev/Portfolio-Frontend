import { Component, OnInit } from '@angular/core';

import { Work } from 'src/app/models/works.interface';
import { works } from './experience.data';
import * as AOS from 'aos';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  workData: Work[] = works;
  addWork: boolean = false;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onAdd(): boolean {
    this.addWork = !this.addWork;
    return this.addWork;
  }

  onEdit(id: number) {
    console.log(id);
  }

  onDelete(id: number) {
    for (let inx = 0; inx < this.workData.length; inx++) {
      if (this.workData[inx].id === id) {
        this.workData.splice(inx, 1);
      }
    }
  }
}
