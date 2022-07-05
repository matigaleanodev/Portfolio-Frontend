import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-subtitle',
  template: ` <span class="text-primary typed-element subtitle"></span>`,
  styleUrls: ['subtitle.component.scss'],
})
export class SubtitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const options = {
      strings: [
        'Angular <img src="assets/images/icons/angular.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Spring Boot <img src="assets/images/icons/springboot.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'NodeJs <img src="assets/images/icons/nodejs.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'MySQL <img src="assets/images/icons/mysql.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Javascript <img src="assets/images/icons/javascript.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Typescript <img src="assets/images/icons/typescript.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'HTML <img src="assets/images/icons/html.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem"> y CSS <img src="assets/images/icons/css.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Java <img src="assets/images/icons/java.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
      ],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true,
    };
    const typed = new Typed('.typed-element', options);
  }
}
