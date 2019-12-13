import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { skipUntil } from 'rxjs/operators';


import { MovieService } from '../../movie.service';
import { SearchResult } from '../../types';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  searchControl = new FormControl();

  autoOptions: Set<string> = new Set();

  searchResult: SearchResult;

  private page = '1';

  private paramsSub: Subscription;
  private querySub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private moveService: MovieService) {
  }

  ngOnInit() {
    this.paramsSub = this.route.paramMap
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

    this.querySub = this.searchControl.valueChanges
      .subscribe(value => {
        if (value && value.trim().length >= 3) {
          this.moveService.search(value)
            .subscribe(response => {
              if (response.Search) {
                this.autoOptions = new Set(
                  response.Search
                    .map(movie => movie.Title)
                    .filter(title => title.toLowerCase().includes(value.toLowerCase()))
                );
              } else {
                this.autoOptions = new Set();
              }
            });
        } else {
          this.autoOptions = new Set();
        }
      });
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.querySub.unsubscribe();
  }

  clear(): void {
    this.searchControl.setValue('');
  }

  handleSelection(title): void {
    this.router.navigate(['/search', 1, encodeURIComponent(title)]);
  }

  goToPage(page): void {
    this.router.navigate(['/search', page, encodeURIComponent(this.searchControl.value)]);
  }

  private search(): void {
    this.autoOptions = new Set();
    if (!this.searchControl.value || this.searchControl.value.length < 3) {
      return;
    }
    this.moveService.search(this.searchControl.value, this.page)
      .subscribe(response => this.searchResult = response);
  }
}
