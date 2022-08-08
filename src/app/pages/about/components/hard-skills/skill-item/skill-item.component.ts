import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HardSkill } from 'src/app/models/skill.interface';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<HardSkill>();
  @Input() skill: HardSkill = {
    id: 0,
    name: '',
    type: 'tool',
    url: '',
    image: '',
  };
  API_URL = environment.API_URL;
  onLogin: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe((res) => {
      this.onLogin = res;
    });
  }

  ngOnInit(): void {
  }

}
