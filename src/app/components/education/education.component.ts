import { Component, OnInit } from '@angular/core';

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
  }

}
