import { Component } from '@angular/core';

import { particles } from './animations/particles.animation';
import { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { AuthService } from './services/authentication/auth.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Matias Galeano';
  isSideBarCollapsed: boolean = false;
  screenWidth: number = 0;

  constructor(private authService: AuthService) {
    this.authService.initApi().subscribe(res => console.log(res));
  }

  id = 'tsparticles';
  particlesUrl = 'http://foo.bar/particles.json';

  onToggleSideBar(data: SideNavToggle): void {
    this.isSideBarCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
  particlesOptions = particles;

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}
