import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FavoritesComponent,
  MovieDetailsComponent,
  SearchPageComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SearchPageComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
