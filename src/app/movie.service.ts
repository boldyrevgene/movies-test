import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { Movie, MoviesDictionary, SearchResult } from './types';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private static readonly STORE_KEY = 'favorite_movies';

  private readonly favorites: MoviesDictionary;

  constructor(private http: HttpClient, private apiKey: string) {
    this.favorites = this.loadFavorites();
  }

  search(query: string, page: number = 1): Observable<SearchResult> {

    const params = new HttpParams({
      fromObject: {
        s: query,
        page: '' + page
      }
    });

    return this.makeRequest(params) as Observable<SearchResult>;
  }

  getMovie(id: string): Observable<Movie> {
    if (this.favorites.hasOwnProperty(id)) {
      return of(this.favorites[id]);
    }

    const params = (new HttpParams()).append('i', id);
    return this.makeRequest(params);
  }

  isFavorite(movie: Movie): boolean {
    return this.favorites.hasOwnProperty(movie.imdbID);
  }

  setAsFavorite(movie: Movie, isFavorite: boolean): void {
    if (!isFavorite && this.favorites.hasOwnProperty(movie.imdbID)) {
      delete this.favorites[movie.imdbID];
    }

    if (isFavorite) {
      this.favorites[movie.imdbID] = movie;
    }

    this.storeFavorites(this.favorites);
  }

  private makeRequest(params: HttpParams): Observable<any> {
    return this.http.get(
      'http://www.omdbapi.com',
      {params: params.append('apikey', this.apiKey)}
    );
  }

  private loadFavorites(): MoviesDictionary {
    const storedData = localStorage.getItem(MovieService.STORE_KEY);

    return storedData ? JSON.parse(storedData) : {};
  }

  private storeFavorites(favorites: MoviesDictionary): void {
    localStorage.setItem(MovieService.STORE_KEY, JSON.stringify(favorites));
  }
}
