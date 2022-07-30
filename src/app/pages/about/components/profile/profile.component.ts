import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profilePic: string = 'assets/images/profilePicture.jpg';
  onLogin: boolean = false;

  constructor(private viewportScroller: ViewportScroller, private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(res => {
    this.onLogin = res;
  }
  );
}

  ngOnInit(): void {}

  onClick(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
