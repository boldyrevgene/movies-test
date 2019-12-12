import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  private page = '1';

  private subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private moveService: MovieService) {
  }

  ngOnInit() {
    this.subscription = this.route.paramMap
      .subscribe(params => {
        if (params.has('query')) {
          this.searchControl.setValue(decodeURIComponent(params.get('query')));
        }
        const page = params.get('page');
        if (!page) {
          return;
        }
        this.page = page;
        this.search();
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

    this.router.navigate(['/search', 1, encodeURIComponent(this.searchControl.value)]);
  }

  goToPage(page): void {
    this.router.navigate(['/search', page, encodeURIComponent(this.searchControl.value)]);
  }

  private search(): void {
    if (!this.searchControl.value || this.searchControl.value.length < 3) {
      return;
    }
    this.moveService.search(this.searchControl.value, this.page)
      .subscribe(response => this.searchResult = response);
  }
}
