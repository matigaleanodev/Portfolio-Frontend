import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { SidebarAnimation } from 'src/app/animations/sidebar-animations';
import { navData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
  animations: [SidebarAnimation]
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
