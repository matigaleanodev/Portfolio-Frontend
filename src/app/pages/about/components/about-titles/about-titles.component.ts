import { Component, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-titles',
  template: `
    <div class="d-flex mt-5 mb-3 pb-2 border-bottom border-light">
      <h3 class="fs-1">{{title}}</h3>
      <button class="btn bg-primary bg-opacity-50 text-light ms-auto"
                    (click)="onClick('about')">
                    Volver Arriba <i class="fas fa-angle-up"></i>
                </button>
    </div>
  `,
  styles: [
  ]
})
export class AboutTitlesComponent {

  @Input() title!: string;

  constructor(private viewportScroller: ViewportScroller) { }

  onClick(id: string){
    this.viewportScroller.scrollToAnchor(id);
  }
}
