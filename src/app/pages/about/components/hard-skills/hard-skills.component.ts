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
  frontend: HardSkill[] = [];
  backend: HardSkill[] = [];
  tools: HardSkill[] = [];
  API_URL = environment.API_URL;
  addSkill: boolean = false;
  onLogin: boolean = false;
  editMode: boolean = false;
  editData!: HardSkill;

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
      this.frontend = data.filter((skill) => skill.type === 'frontend');
      this.backend = data.filter((skill) => skill.type === 'backend');
      this.tools = data.filter((skill) => skill.type === 'tool');
    });
  }

  onAdd(): boolean {    
    return this.addSkill = !this.addSkill;
  }
  
  onSubmit(data: HardSkill): void {
    this.skillService.postHardSkill(data).subscribe((res) => {
      console.log(res);
    });
    this.addSkill = false;
  }

  onEditMode(skill: HardSkill): boolean {
    this.editData = skill;
    return this.editMode = true;
  }


  onEdit(data: HardSkill) {
    this.skillService.putHardSkill(data).subscribe((res) => {
      console.log(res);
      this.editMode = false;
    });
  }

  onDelete(id: number): void {
    this.skillService.deleteHardSkill(id).subscribe((res) => {
      console.log(res);
    });
  }
}