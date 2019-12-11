import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FavoritesComponent, SearchPageComponent } from './components';


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
    component: SearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
