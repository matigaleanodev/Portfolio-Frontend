import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/data-services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  profile!: Profile;
  constructor(
    private profServ: ProfileService
  ) {}

  ngOnInit(): void {
    this.profServ.getProfile().subscribe(data => { this.profile = data[0]; console.log(this.profile) });
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
