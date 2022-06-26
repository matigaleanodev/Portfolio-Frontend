import { Component, OnInit } from '@angular/core';
import { softSkillData, SoftSkill } from './soft-skills.data';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {

  skills: SoftSkill[] = softSkillData;

  constructor() { }

  ngOnInit(): void {
  }

}
