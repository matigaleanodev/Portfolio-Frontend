import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {

  profilePicture: string = 'assets/images/profilePicture.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
