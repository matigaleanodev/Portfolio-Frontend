import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profilePic: string = 'assets/images/profilePicture.jpg';

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  onClick(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
