import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.interface';
import { Work } from 'src/app/models/works.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() data!: Work | Education;

  constructor() {}

  ngOnInit(): void {}
}
