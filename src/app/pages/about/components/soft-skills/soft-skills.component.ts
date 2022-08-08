import { Component, OnInit } from '@angular/core';
import { SoftSkill } from 'src/app/models/skill.interface';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { SoftSkillService } from 'src/app/services/data-services/soft-skill.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss'],
})
export class SoftSkillsComponent implements OnInit {
  skills: SoftSkill[] = [];
  addSkill: boolean = false;
  API_URL = environment.API_URL;
  onLogin: boolean = false;
  editMode: boolean = false;

  constructor(private skillService: SoftSkillService, private authService: AuthService) {
    this.authService.isLoggedIn().subscribe((res) => {
      this.onLogin = res;
    });
  }

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

  onAdd(): boolean {    
    return this.addSkill = !this.addSkill;
  }
  
  onSubmit(data: SoftSkill): void {
    this.skillService.postSoftSkill(data).subscribe((res) => {
      console.log(res);
    });
    this.addSkill = false;
  }

  onEdit(data: SoftSkill) {
    this.skillService.putSoftSkill(data).subscribe((res) => {
      console.log(res);
    });
  }

  onDelete(id: number): void {
    this.skillService.deleteSoftSkill(id).subscribe((res) => {
      console.log(res);
    });
  }
}
