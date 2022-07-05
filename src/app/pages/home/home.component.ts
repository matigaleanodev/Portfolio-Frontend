import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banner: string = 'assets/images/banner-home.png';

  constructor() {}

  ngOnInit(): void {}
}
