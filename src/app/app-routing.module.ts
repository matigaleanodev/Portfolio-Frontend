import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/', 
        pathMatch: 'full', 
        data: {animation: 'home'}, 
        title: 'Matias Galeano'
  },
  {path: 'home', loadChildren: ()=> 
        import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {path: 'about', loadChildren: ()=> 
        import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {path: 'projects', loadChildren: ()=> 
  import('./pages/projects/projects.module').then(m => m.ProjectsModule),
  },
  {path: 'contact', loadChildren: ()=> 
  import('./pages/contact/contact.module').then(m => m.ContactModule),
  },
  {path: 'blog', loadChildren: ()=> 
  import('./pages/blog/blog.module').then(m => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
