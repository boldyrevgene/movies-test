import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';


import { Movie } from '../../types';
import { MovieService } from '../../movie.service';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(private cd: ChangeDetectorRef, public movieService: MovieService) { }

  ngOnInit() {
  }

  setFavorite(isFavorite: boolean): void {
    this.movieService.setAsFavorite(this.movie, isFavorite);
  }

}
