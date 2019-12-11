import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Movie } from './types';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private apiKey: string) { console.log(this.apiKey); }

  search(query: string): Observable<Movie[]> {
    return null;
  }

  getMovie(id: string): Observable<Movie> {
    return null;
  }
}
