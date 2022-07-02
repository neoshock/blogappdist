import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogGeneratorComponent } from './blog-generator/blog-generator.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'blog_generator', component: BlogGeneratorComponent },
  { path: 'blogs/:idblog', component: BlogPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
