import { Component, OnInit } from '@angular/core';

import * as AOS  from 'aos';
import { Education } from '../../models/education.interface';
import { educationData } from '../../pages/about/education.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {  

  educationData: Education[] = educationData;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onEdit(id: number){
    console.log(id)
  }

  onDelete(id: number){
    for (let inx = 0; inx < this.educationData.length; inx++) {
      if (this.educationData[inx].id === id) {
        this.educationData.splice(inx, 1);
      }
    }
  }

}
