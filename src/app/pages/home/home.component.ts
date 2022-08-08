import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banner: string = 'assets/images/banner-home.png';

  constructor() {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
