import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { animate, trigger, transition, style, keyframes } from '@angular/animations';
import { navData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms', 
          style({opacity:1})
          )
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms', 
          style({opacity:0})
          )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('700ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: 0}),
            style({transform: 'rotate(1turn)', offset: 1}),
          ])
          )
      ]),      
    ])
  ]
})
export class SidebarNavComponent implements OnInit {

  @Output() onToggleSideBar: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = false;
  screenWidth: number = 0;
  navData = navData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideBar.emit({
        collapsed: this.collapsed, 
        screenWidth: this.screenWidth
      });
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideBar.emit({
      collapsed: this.collapsed, 
      screenWidth: this.screenWidth
    });
  }
  closeSideBar(): void {
    this.collapsed = false;    
    this.onToggleSideBar.emit({
      collapsed: this.collapsed, 
      screenWidth: this.screenWidth
    });
  }

}
