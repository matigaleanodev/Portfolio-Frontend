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
        'Work with Angular <i class="fa-brands fa-angular" style="color: #dd4b39; font-size: 1.8rem"></i>',
        'Work with Node <i class="fa-brands fa-node" style="color: #339933; font-size: 1.8rem"></i>',
        'Work with Spring Boot <img src="assets/images/icons/springboot.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        'Working with MySQL <i class="fa-solid fa-database" style="color: #8bbbfa"></i>',
        'Coding in Javascript <i class="fa-brands fa-js-square" style="color: #f9a825; font-size: 1.8rem"></i>',
        'Coding in Typescript <img src="assets/images/icons/typescript.svg" style="height: 1.5rem; width: 1.5rem; margin-bottom: 0.5rem">',
        'Coding in HTML <i class="fa-brands fa-html5" style="color: #e34f26; font-size: 1.8rem"></i>',
        'Coding in CSS <i class="fa-brands fa-css3-alt" style="color: #167cdb; font-size: 1.8rem"></i>',
        'Coding in Java <i class="fa-brands fa-java" style="color: #b01919; font-size: 1.8rem"></i>',
      ],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true
  };
  const typed = new Typed('.typed-element', options);
  }

 
}


// <i class="sb fa-solid fa-power-off" style="font-size: 1.3rem; -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); background: #43c032; color: #160129; padding: 0.4rem"></i>