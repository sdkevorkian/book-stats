import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchBy: string;

  constructor() { }

  ngOnInit() {
  }
  searchBooks(term: string): void {
    console.log('books here:' + term + this.searchBy);
  }
  searchBooksBy(mode: string): void {
    this.searchBy = mode;
  }
}
