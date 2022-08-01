import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AuthService } from 'src/app/services/authentication/auth.service';

import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/data-services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  profilePic: string = 'assets/images/profilePicture.jpg';
  onLogin: boolean = false;

  constructor(
    private viewportScroller: ViewportScroller,
    private authService: AuthService,
    private profService: ProfileService
  ) {
    this.authService.isLoggedIn().subscribe((res) => {
      this.onLogin = res;
    });
  }

  ngOnInit(): void {
    this.getData();
    this.profService.Refreshrequired.subscribe(() => {
      this.getData();
    });
  }

  getData(): void {
    this.profService.getProfile().subscribe((data: Profile[]) => {
      console.log(data);
      this.profile = data[0];
    });
  }

  onClick(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
