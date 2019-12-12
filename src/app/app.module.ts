import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';


import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FavoritesComponent,
  MovieCardComponent,
  MovieDetailsComponent,
  MovieListComponent,
  SearchPageComponent
} from './components';
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SearchPageComponent,
    FavoritesComponent,
    MovieListComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonToggleModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: MovieService,
      deps: [HttpClient],
      useFactory: (http: HttpClient) => new MovieService(http, environment.apiKey)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
