import { InjectionToken } from '@angular/core';

export interface MovieRating {
  Source: string;
  Value: string;
}

export type MovieType = 'movie' | 'series' | 'episode';

export interface Movie {
  Title: string;
  imdbID: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRating[];
  imdbRating: string;
  Type: MovieType;
  Production: string;
}

export interface SearchResult {
  Search: Movie[];
  totalResults: number;
}

export type MoviesDictionary = Record<string, Movie>;
