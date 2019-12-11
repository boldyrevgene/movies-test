import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Movie, SearchResult } from './types';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private apiKey: string) { }

  search(query: string, page: number = 1): Observable<SearchResult> {

    const params = new HttpParams({
      fromObject: {
        apikey: this.apiKey,
        s: query,
        page: '' + page
      }
    });

    return this.http.get('http://www.omdbapi.com', {params}) as Observable<SearchResult>;
  }

  getMovie(id: string): Observable<Movie> {
    return null;
  }

  isFavorite(movie: Movie): boolean {
    return false;
  }

  setAsFavorite(movie: Movie, isFavorite: boolean): void {

  }
}
