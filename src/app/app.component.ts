import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Matias Galeano';

  isSideBarCollapsed: boolean = false;
  screenWidth: number = 0;


  onToggleSideBar(data: SideNavToggle): void {
    this.isSideBarCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
