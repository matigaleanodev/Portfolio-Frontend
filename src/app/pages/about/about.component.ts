import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  banner: string = 'assets/images/banner_02.png';

  constructor() { }

  ngOnInit(): void {
  }

}
