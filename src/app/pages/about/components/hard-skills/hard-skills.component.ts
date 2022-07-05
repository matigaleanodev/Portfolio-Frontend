import { Component, OnInit } from '@angular/core';
import { HardSkill, hardSkillData } from './hard-skills.data';
import * as AOS from 'aos';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss'],
})
export class HardSkillsComponent implements OnInit {
  skills: HardSkill[] = hardSkillData;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
