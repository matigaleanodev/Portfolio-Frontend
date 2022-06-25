import { Component } from '@angular/core';

import { particles } from './animations/particles.animation';
import { Container, Engine } from 'tsparticles-engine';
import { loadFull } from "tsparticles";

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

  id = "tsparticles";
  particlesUrl = "http://foo.bar/particles.json";


  onToggleSideBar(data: SideNavToggle): void {
    this.isSideBarCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
  particlesOptions = particles;

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}

