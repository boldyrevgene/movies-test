import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {
  FavoritesComponent,
  MovieDetailsComponent,
  SearchPageComponent
} from './components';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'favorites'
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'search',
    pathMatch: 'full',
    redirectTo: 'search/1/'
  },
  {
    path: 'search/:page',
    component: SearchPageComponent
  },
  {
    path: 'search/:page/:query',
    component: SearchPageComponent
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
