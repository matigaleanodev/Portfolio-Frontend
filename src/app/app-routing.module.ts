import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full', data: {animation: 'dashboard'}},
  {path: 'home', component: HomeComponent, data: {animation: 'dashboard'}},
  {path: 'about', component: AboutComponent, data: {animation: 'about'}},
  {path: 'projects', component: ProjectsComponent, data: {animation: 'projects'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'contact'}},  
  {path: 'blog', component: BlogComponent, data: {animation: 'blog'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
