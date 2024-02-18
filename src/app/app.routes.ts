import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlesPageComponent } from './components/articles/articles.component';

export const routes: Routes = [
  { path: 'about-me', component: HomeComponent },
  { path: 'articles', component: ArticlesPageComponent },
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
];
