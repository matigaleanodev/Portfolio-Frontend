import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { HardSkill } from 'src/app/models/skill.interface';
import { HardSkillService } from 'src/app/services/data-services/hard-skill.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss'],
})
export class HardSkillsComponent implements OnInit {
  skills: HardSkill[] = [];  
  API_URL = environment.API_URL;

  constructor(private skillService: HardSkillService) {}

  ngOnInit(): void {
    this.getData();
    this.skillService.Refreshrequired.subscribe(() => {
      this.getData();
    });
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  getData(): void {
    this.skillService.getHardSkills().subscribe((data: HardSkill[]) => {
      this.skills = data;
    });
  }
}
