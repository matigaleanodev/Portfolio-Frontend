import { Component, OnInit } from '@angular/core';
import { Skill, skillData } from './skills.data';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = skillData;

  constructor() { }

  ngOnInit(): void {
  }

}
