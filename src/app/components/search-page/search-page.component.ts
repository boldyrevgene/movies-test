import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';


import { MovieService } from '../../movie.service';
import { SearchResult } from '../../types';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {


  searchControl = new FormControl();

  searchResult: SearchResult;

  private subscription: Subscription;

  constructor(private moveService: MovieService) { }

  ngOnInit() {
    this.subscription = this.searchControl.valueChanges
      .subscribe((value) => {

      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clear(): void {
    this.searchControl.setValue('');
  }

  handleEnterKey(event: KeyboardEvent): void {
    if (event.key !== 'Enter' || this.searchControl.value.length < 3) {
      return;
    }
    this.search();
  }

  private search(): void {
    this.moveService.search(this.searchControl.value)
      .subscribe(response => this.searchResult = response);
  }
}
