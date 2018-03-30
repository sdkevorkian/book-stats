import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

import { Subject } from 'rxjs/Subject';

import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchBy: string;
  books: any;
  noBooks: boolean;

  private searchTerms = new Subject<string>();

  constructor(private bookSVC: BookService) { }

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.bookSVC.getBooks(term)),
    ).subscribe((books) => {
      this.books = books;
      console.log(this.books);
    });
  }
  searchBooks(term: string): void {
    let terms: string;
    if (this.searchBy) {
      terms = `${this.searchBy}:${term}`;
    } else {
      terms = term;
    }

    this.searchTerms.next(terms);
  }
  searchBooksBy(mode: string): void {
    this.searchBy = mode;
  }
}
