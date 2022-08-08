import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-contact-title',
  template: `
    <div class="d-flex mb-3 pb-2 border-bottom border-light">
      <h3 class="fs-1 fw-bold">{{ title }}</h3>
      <div class="d-flex gap-3 ms-auto">
        <!-- <i class="fa-solid fa-plus m-auto icon" (click)="onAdd.emit()" *ngIf="onLogin"></i> -->
      </div>
    </div>
  `,
  styles: [`
    @import "variables";

    .icon {
      transition: all 0.5s ease;
      &:hover {
        color: $color-primary;
        transform: scale(1.25);
      }
      &:active {
        color: $color-light;
        transform: scale(0.75);
      }
    }
    `],
})
export class ContactTitleComponent{
  @Input() title!: string;
  @Output() onAdd = new EventEmitter();
  onLogin: boolean = false;

  constructor(private viewportScroller: ViewportScroller, private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(res => {
      this.onLogin = res;
    }
    );
  }

  onClick(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
