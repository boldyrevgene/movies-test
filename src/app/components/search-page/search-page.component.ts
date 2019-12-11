import { Component, OnInit } from '@angular/core';


import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private moveService: MovieService) { }

  ngOnInit() {
  }

}
