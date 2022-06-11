import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { ContactModule } from './pages/contact/contact.module';
import { BlogModule } from './pages/blog/blog.module';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialBoxComponent } from './components/social-box/social-box.component';

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
    HomeModule,
    AboutModule,
    ProjectsModule,
    ContactModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
