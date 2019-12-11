import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Movie } from './types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  search(title: string): Observable<Movie[]> {
    return null;
  }

  getMovie(id: string): Observable<Movie> {
    return null;
  }
}
