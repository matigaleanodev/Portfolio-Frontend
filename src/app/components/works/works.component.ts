import { Component, OnInit } from '@angular/core';

import { Work } from '../../models/works.interface';
import { works } from '../../pages/about/work.data';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  
  works: Work[] = works;

  constructor() { }

  ngOnInit(): void {
  }

}
