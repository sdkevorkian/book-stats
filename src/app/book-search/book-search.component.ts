import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchBy: string;
  books: any;
  noBooks: boolean;
  constructor(private bookSVC: BookService) { }

  ngOnInit() {
  }
  searchBooks(term: string): void {
    let terms: string;
    if (this.searchBy) {
      terms = `${this.searchBy}:${term}`;
    } else {
      terms = term;
    }
    this.bookSVC.getBooks(terms).subscribe(books => {
      console.log(books);
      this.books = books;
    })
  }
  searchBooksBy(mode: string): void {
    this.searchBy = mode;
  }
}
