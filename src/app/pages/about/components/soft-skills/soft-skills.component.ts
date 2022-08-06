import { Component, OnInit } from '@angular/core';
import { SoftSkill } from 'src/app/models/skill.interface';
import { SoftSkillService } from 'src/app/services/data-services/soft-skill.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss'],
})
export class SoftSkillsComponent implements OnInit {
  skills: SoftSkill[] = [];
  API_URL = environment.API_URL;

  constructor(private skillService: SoftSkillService) {}

  ngOnInit(): void {
    this.getData();
    this.skillService.Refreshrequired.subscribe(() => {
      this.getData();
    });
  }

  getData(): void {
    this.skillService.getSoftSkills().subscribe((data: SoftSkill[]) => {
      this.skills = data;
    });
  }
}
