import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  avatar: string = 'assets/images/profilePicture.jpg';
  banner: string = 'https://thumbs.dreamstime.com/b/creative-glowing-coding-hologram-blue-background-information-technology-business-data-concept-d-rendering-229164340.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
