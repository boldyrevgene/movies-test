import { Component, HostBinding, Input, OnInit } from '@angular/core';


import { Movie } from '../../types';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input()
  movies: Movie[] = [];

  @HostBinding('class.empty')
  get isEmpty(): boolean {
    return !this.movies || !this.movies.length;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
