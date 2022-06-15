import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-subtitle',
  template: `
  <span class="typed-element text-primary subtitle"></span>`,
  styleUrls: ['subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    const options ={
      strings: [
        'Working with Angular <i class="fa-brands fa-angular" style="color: #dd4b39; font-size: 1.8rem"></i>',
        'Working with Node <i class="fa-brands fa-node" style="color: #339933; font-size: 1.8rem"></i>',
        'Working with MySQL <i class="fa-solid fa-database" style="color: #8bbbfa"></i>',
        'Coding in Javascript <i class="fa-brands fa-js-square" style="color: #f9a825; font-size: 1.8rem"></i>',
        'Coding in Typescript <i class="fa-brands fa-js" style="color: #2b7489; font-size: 1.8rem"></i>',
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
