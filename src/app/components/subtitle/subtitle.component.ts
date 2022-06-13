import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-subtitle',
  template: `
  <span class="typed-element text-light"></span>`
})
export class SubtitleComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    const options ={
      strings: [
        'Working with Angular <i class="fa-brands fa-angular" style="color: #dd4b39"></i>',
        'Working with React <i class="fa-brands fa-react" style="color: #00d8ff"></i>',
        'Working with Node <i class="fa-brands fa-node" style="color: #339933"></i>',
        'Coding in Javascript <i class="fa-brands fa-js-square" style="color: #f9a825"></i>',
        'Coding in Typescript <i class="fa-brands fa-angular" style="color: #2b7489"></i>',
        'Coding in Java <i class="fa-brands fa-java" style="color: #b07219"></i>',
      ],
      typeSpeed: 50,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
  };
  const typed = new Typed('.typed-element', options);
  }

 
}
