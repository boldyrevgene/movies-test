import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Movie } from '../../types';
import { MovieService } from '../../movie.service';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: Movie;

  isFavorite = false;

  constructor(private cd: ChangeDetectorRef, private router: Router, public movieService: MovieService) {
  }

  ngOnInit() {
    this.isFavorite = this.movieService.isFavorite(this.movie);
  }

  setFavorite(isFavorite: boolean): void {
    this.isFavorite = isFavorite;
    this.movieService.setAsFavorite(this.movie, isFavorite);
  }

  viewDetails(): void {
    this.router.navigate(['/details/', this.movie.imdbID], {state: {movie: this.movie}});
  }

}
