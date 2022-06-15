import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avatar: string = 'assets/images/profilePicture.jpg';
  banner: string = 'https://thumbs.dreamstime.com/b/creative-glowing-coding-hologram-blue-background-information-technology-business-data-concept-d-rendering-229164340.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
