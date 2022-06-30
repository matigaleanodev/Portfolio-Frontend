import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-subtitle',
  template: `
  <span class="text-primary typed-element subtitle"></span>`,
  styleUrls: ['subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    const options ={
      strings: [
        'Work with Angular <img src="assets/images/icons/angular.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Work with Spring Boot <img src="assets/images/icons/springboot.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Work with MySQL <img src="assets/images/icons/mysql.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Coding in Javascript <img src="assets/images/icons/javascript.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Coding in Typescript <img src="assets/images/icons/typescript.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Coding in HTML <img src="assets/images/icons/html.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Coding in CSS <img src="assets/images/icons/css.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Coding in Java <img src="assets/images/icons/java.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
      ],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true
  };
  const typed = new Typed('.typed-element', options);
  }

 
}


// <i class="sb fa-solid fa-power-off" style="font-size: 1.3rem; -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); background: #43c032; color: #160129; padding: 0.4rem"></i>