import { Component, OnInit } from '@angular/core';

import { Work } from 'src/app/models/works.interface';
import { Education } from 'src/app/models/education.interface';
import { educationData } from './education.data';
import { works } from './work.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  educationData: Education[] = educationData;
  works: Work[] = works;

  constructor() { }

  ngOnInit(): void {
  }

}
