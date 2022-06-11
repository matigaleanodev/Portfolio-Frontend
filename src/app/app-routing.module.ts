import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full', data: {animation: 'home'}, title: 'Matias Galeano'},
  {path: 'home', component: HomeComponent, data: {animation: 'home'}, title: 'Matias Galeano'},
  {path: 'about', component: AboutComponent, data: {animation: 'about'}, title: 'About'},
  {path: 'projects', component: ProjectsComponent, data: {animation: 'projects'}, title: 'Projects'},
  {path: 'contact', component: ContactComponent, data: {animation: 'contact'}, title: 'Contact'},  
  {path: 'blog', component: BlogComponent, data: {animation: 'blog'}, title: 'Blog'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
