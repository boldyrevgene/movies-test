import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { MovieService } from '../../movie.service';
import { Movie } from '../../types';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movie: Movie;

  private subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit() {
    this.subscription = this.route.paramMap
      .subscribe(params => {
        if (!params.has('id')) {
          this.router.navigate(['/']);
          return;
        }
        this.handleMove(params.get('id'));
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private handleMove(movieId) {
    // const movie = history.state.movie as Movie;
    //
    // if (movie && movie.imdbID === movieId) {
    //   this.movie = movie;
    //   return;
    // }

    this.movieService.getMovie(movieId)
      .subscribe(response => this.movie = response);
  }
}
