import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgParticlesModule } from 'ng-particles';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { ContactModule } from './pages/contact/contact.module';
import { LoginModule } from './pages/login/login.module';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './shared/sidebar-nav/sidebar-nav.component';
import { BodyComponent } from './shared/body/body.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SocialBoxComponent } from './shared/social-box/social-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    SocialBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgParticlesModule,
    NgbModule,
    HomeModule,
    AboutModule,
    ProjectsModule,
    ContactModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
