import { Component, OnInit } from '@angular/core';

import * as AOS  from 'aos';
import { Education } from 'src/app/models/education.interface';
import { Work } from 'src/app/models/works.interface';
import { educationData } from './education.data';
import { works } from './work.data';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  banner: string = 'assets/images/banner_02.png';
  works: Work[] = works;
  educationData: Education[] = educationData;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onEditWork(id: number){
    console.log(id)
  }

  onDeleteWork(id: number){
    for (let inx = 0; inx < this.works.length; inx++) {
      if (this.works[inx].id === id) {
        this.works.splice(inx, 1);
      }
    }
  }

  onEditEducation(id: number){
    console.log(id)
  }

  onDeleteEducation(id: number){
    for (let inx = 0; inx < this.educationData.length; inx++) {
      if (this.educationData[inx].id === id) {
        this.educationData.splice(inx, 1);
      }
    }
  }

}
