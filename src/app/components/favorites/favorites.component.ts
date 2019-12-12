import { Component, OnInit } from '@angular/core';


import { MovieService } from '../../movie.service';
import { Movie } from '../../types';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.favorites = this.movieService.getFavorites();
  }

}
